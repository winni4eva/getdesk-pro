<?php
namespace App\Domain\Repositories\ListingUserAmenity;

interface ListingUserAmenityRepoInterface{
    public function storeListingUserAmenities(int $listingId, array $request);
}