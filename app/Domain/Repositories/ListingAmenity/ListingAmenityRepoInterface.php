<?php
namespace App\Domain\Repositories\ListingAmenity;

interface ListingAmenityRepoInterface{
    public function storeListingAmenities(int $listingId, array $request);
}