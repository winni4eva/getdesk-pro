<?php
namespace App\Domain\Repositories\ListingUserAmenity;

use App\ListingUserAmenity;

class ListingUserAmenityRepo implements ListingUserAmenityRepoInterface{

    protected $model;

    public function __construct(ListingUserAmenity $model)
    {
        $this->model = $model;
    }
    
    public function storeListingUserAmenities(int $listingId, array $request)
    {
        collect($request)->map(function($amenity)use($listingId){
            $this->model->updateOrCreate(
                ['listing_id'=>$listingId,'user_amenities_id'=>$amenity['user_amenities_id']],
                $amenity    
            );
        });
    }
}