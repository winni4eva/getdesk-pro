<?php

namespace App\Domain\Services\ListingImage;

use App\Domain\Repositories\ListingImage\ListingImageRepoInterface;

class ListingImageService {
    
    protected $listingImageRepo;

    public function __construct(ListingImageRepoInterface $listingImageRepo)
    {
        $this->listingImageRepo = $listingImageRepo;
    }

    public function storeListingImage(int $listingId,string $imagePath)
    {
        return $this->listingImageRepo->storeListingImage($listingId, $imagePath);
    }
}