<?php
namespace App\Domain\Repositories\ListingImage;

use App\ListingImage;

class ListingImageRepo implements ListingImageRepoInterface{

    protected $model;

    public function __construct(ListingImage $model)
    {
        $this->model = $model;
    }
    
    public function storeListingImage(int $listingId, string $imagePath)
    {
        return $this->model->create(['listing_id'=>$listingId,'img_path'=>$imagePath]);       
    }
}