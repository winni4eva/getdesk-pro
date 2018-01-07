<?php
namespace App\Domain\Repositories\ListingOpeningHour;

use App\ListingOpeningHour;

class ListingOpeningHourRepo implements ListingOpeningHourRepoInterface{

    protected $model;

    public function __construct(ListingOpeningHour $model)
    {
        $this->model = $model;
    }
    
    public function storeListingOpeningHours(int $listingId, array $request)
    {
        collect($request)->map(function($openingHour)use($listingId){
            $this->model->updateOrCreate(
                ['listing_id'=>$listingId],
                $openingHour    
            );
        });
    }
}