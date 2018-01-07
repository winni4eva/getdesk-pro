<?php
namespace App\Domain\Repositories\ListingImage;

interface ListingImageRepoInterface{
    public function storeListingImage(int $listingId, string $imagePath);
}