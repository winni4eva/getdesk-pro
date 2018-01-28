<?php

namespace App\Domain\Services\Listing;

use App\Domain\Repositories\Listing\ListingRepoInterface;
use Illuminate\Http\Request;

class ListingService {
    
    protected $listingRepo;

    public function __construct(ListingRepoInterface $listingRepo)
    {
        $this->listingRepo = $listingRepo;
    }

    public function getListings(array $request)
    {
        return $this->listingRepo->getListings($request);
    }

    public function storeListing(Request $request)
    {
        return $this->listingRepo->storeListing($request);
    }
}