<?php

namespace App\Domain\Services\ListingUserAmenity;

use App\Domain\Repositories\ListingUserAmenity\ListingUserAmenityRepoInterface;
use Illuminate\Http\Request;

class ListingUserAmenityService {
    
    protected $listingUserAmenityRepo;

    public function __construct(ListingUserAmenityRepoInterface $listingUserAmenityRepo)
    {
        $this->listingUserAmenityRepo = $listingUserAmenityRepo;
    }

    public function storeListingUserAmenities(int $listingId, array $request)
    {
        return $this->listingUserAmenityRepo->storeListingUserAmenities($listingId, $request);
    }
}