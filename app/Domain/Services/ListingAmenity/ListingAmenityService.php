<?php

namespace App\Domain\Services\ListingAmenity;

use App\Domain\Repositories\ListingAmenity\ListingAmenityRepoInterface;
use Illuminate\Http\Request;

class ListingAmenityService {
    
    protected $listingAmenityRepo;

    public function __construct(ListingAmenityRepoInterface $listingAmenityRepo)
    {
        $this->listingAmenityRepo = $listingAmenityRepo;
    }

    public function storeListingAmenities(int $listingId, array $request)
    {
        return $this->listingAmenityRepo->storeListingAmenities($listingId, $request);
    }
}