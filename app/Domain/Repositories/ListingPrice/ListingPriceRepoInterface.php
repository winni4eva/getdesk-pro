<?php
namespace App\Domain\Repositories\ListingPrice;

interface ListingPriceRepoInterface{
    public function storeListingPrices(int $ListingId, array $listingPrices);
}