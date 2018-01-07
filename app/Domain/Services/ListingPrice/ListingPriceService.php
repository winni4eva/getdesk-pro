<?php

namespace App\Domain\Services\ListingPrice;

use App\Domain\Repositories\ListingPrice\ListingPriceRepoInterface;

class ListingPriceService {
    
    protected $listingPriceRepo;

    public function __construct(ListingPriceRepoInterface $listingPriceRepo)
    {
        $this->listingPriceRepo = $listingPriceRepo;
    }

    public function storeListingPrices(int $listingId,array $listingPrices)
    {
        return $this->listingPriceRepo->storeListingPrices($listingId, $listingPrices);
    }
}