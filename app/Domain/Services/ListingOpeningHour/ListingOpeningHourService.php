<?php

namespace App\Domain\Services\ListingOpeningHour;

use App\Domain\Repositories\ListingOpeningHour\ListingOpeningHourRepoInterface;
use Illuminate\Http\Request;

class ListingOpeningHourService {
    
    protected $listingOpeningHourRepo;

    public function __construct(ListingOpeningHourRepoInterface $listingOpeningHourRepo)
    {
        $this->listingOpeningHourRepo = $listingOpeningHourRepo;
    }

    public function storeListingOpeningHours(int $listingId, array $request)
    {
        return $this->listingOpeningHourRepo->storeListingOpeningHours($listingId, $request);
    }
}