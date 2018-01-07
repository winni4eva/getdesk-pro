<?php
namespace App\Domain\Repositories\ListingAmenity;

use App\ListingAmenity;

class ListingAmenityRepo implements ListingAmenityRepoInterface{

    protected $model;

    public function __construct(ListingAmenity $model)
    {
        $this->model = $model;
    }
    
    public function storeListingAmenities(int $listingId, array $request)
    {
        collect($request)->map(function($amenity)use($listingId){
            $this->model->updateOrCreate(
                ['listing_id'=>$listingId],
                $amenity    
            );
        });
    }
}