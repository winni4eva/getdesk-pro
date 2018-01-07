<?php
namespace App\Domain\Repositories\ListingOpeningHour;

interface ListingOpeningHourRepoInterface{
    public function storeListingOpeningHours(int $listingId, array $request);
}