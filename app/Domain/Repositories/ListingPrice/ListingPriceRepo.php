<?php
namespace App\Domain\Repositories\ListingPrice;

use App\ListingPrice;

class ListingPriceRepo implements ListingPriceRepoInterface{

    protected $model;

    public function __construct(ListingPrice $model)
    {
        $this->model = $model;
    }
    
    public function storeListingPrices(int $listingId, array $listingPrices)
    {
        collect($listingPrices)->map(function($price)use($listingId){
            $this->model->updateOrCreate(['listing_id'=>$listingId,'pricing_period_id'=>$price['pricing_period_id']],
                collect($price)->put('listing_id',$listingId)->all());
        });       
        return true;
    }
}