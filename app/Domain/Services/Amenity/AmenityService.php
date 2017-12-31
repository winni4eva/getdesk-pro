<?php

namespace App\Domain\Services\Amenity;

use App\Domain\Repositories\Amenity\AmenityRepoInterface;

class AmenityService {
    
    protected $amenityRepo;

    public function __construct(AmenityRepoInterface $amenityRepo)
    {
        $this->amenityRepo = $amenityRepo;
    }

    public function getAmenities()
    {
        return $this->amenityRepo->getAmenities();
    }
}