<?php
namespace App\Domain\Repositories\Listing;

use App\Listing;
use App\Domain\Services\ListingOpeningHour\ListingOpeningHourService;
use App\Domain\Services\ListingAmenity\ListingAmenityService;
use App\Domain\Services\ListingPrice\ListingPriceService;
use App\Domain\Services\ListingImage\ListingImageService;
use App\Domain\Services\ListingUserAmenity\ListingUserAmenityService;
use Illuminate\Http\Request;
use DB;

class ListingRepo implements ListingRepoInterface{

    protected $model;

    protected $listingOpeningHourService;

    protected $listingAmenityService;
    
    protected $listingUserAmenityService;

    protected $listingPricingService;

    protected $listingImageService;

    protected $amenityDefinition = [
        'system_amenities'=>'amenity_id',
        'user_amenities'=>'user_amenities_id'
    ];

    public function __construct(Listing $model, ListingOpeningHourService $listingOpeningHourService,
        ListingAmenityService $listingAmenityService, ListingPriceService $listingPricingService,
        ListingImageService $listingImageService, ListingUserAmenityService $listingUserAmenityService)
    {
        $this->model = $model;
        $this->listingOpeningHourService = $listingOpeningHourService;
        $this->listingAmenityService = $listingAmenityService;
        $this->listingPricingService = $listingPricingService;
        $this->listingImageService = $listingImageService;
        $this->listingUserAmenityService = $listingUserAmenityService;
    }
    
    public function getListings(){
        return $this->model->with(['images'])->get();
    }

    public function storeListing(Request $request)
    {
        DB::transaction(function()use($request){
            $listing = $this->model->updateOrCreate(
                ['id'=> $this->decodeString($request->get("details"))['id'] ?? 0 ], 
                $this->decodeString($request->get("details"))
            );

            $listing->user()->sync([\Auth::user()->id]);

            $this->listingOpeningHourService->storeListingOpeningHours(
                $listing->id, 
                $this->decodeString($request->get("details"))['opening_hours']
            );

            collect($this->amenityDefinition)->map(function($defintion, $amenityType)use($request, $listing){
                $amenities = $this->filterAmenities( 
                    $this->decodeString( $request->get("amenities") )[$amenityType], 
                    $listing->id, $amenityType 
                );
                $this->storeAmenities($amenityType, $amenities, $listing->id);
            });

            $this->listingPricingService->storeListingPrices(
                $listing->id, 
                $this->decodeString( $request->get("pricing") )['periods'] 
            );

            $this->storeListingImages($request, $listing->id);
        });
        return true;
    }

    protected function decodeString($jsonString)
    {
        return json_decode($jsonString, true);
    }

    protected function filterAmenities(array $amenities, int $listingId, string $amenityType)
    {
        return collect($amenities)->filter(function($amenity){
            return $amenity['checked'];
        })->map(function($amenity)use($amenityType,$listingId){
            return [
                'listing_id' => $listingId,
                $this->amenityDefinition[$amenityType] => $amenity['id']
            ];
        })->all();
    }

    protected function storeListingImages(Request $request, $listingId)
    {
        collect($request->all())->keys()->filter(function($key){
            return substr($key,0,5)=='image';
        })->map(function($inputName)use($request, $listingId){     
            $path = public_path().$this->getImagePath($listingId);
            if( !file_exists($path) ) mkdir($path, 0777, true);
            
            $image = $request->file($inputName);
            $img_path = $image->move($path, $image->getClientOriginalName());
            $imageUrl = $this->getImagePath($listingId).DIRECTORY_SEPARATOR.$image->getClientOriginalName();
            
            $this->listingImageService->storeListingImage($listingId, $imageUrl);
        });
    }

    protected function getImagePath(int $listingId)
    {
        $dirSeparator = DIRECTORY_SEPARATOR;
        return "{$dirSeparator}assets{$dirSeparator}images{$dirSeparator}desks{$dirSeparator}{$listingId}";
    }

    protected function storeAmenities(string $amenityType, array $amenities, int $listingId)
    {
        if ($amenityType == 'system_amenities')
            $this->listingAmenityService->storeListingAmenities($listingId, $amenities);
        elseif($amenityType == 'user_amenities')
            $this->listingUserAmenityService->storeListingUserAmenities($listingId, $amenities);
    }
}