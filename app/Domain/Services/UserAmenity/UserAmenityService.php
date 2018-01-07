<?php

namespace App\Domain\Services\UserAmenity;

use App\Domain\Repositories\UserAmenity\UserAmenityRepoInterface;

class UserAmenityService {
    
    protected $userAmenityRepo;

    public function __construct(UserAmenityRepoInterface $userAmenityRepo)
    {
        $this->userAmenityRepo = $userAmenityRepo;
    }

    public function getUserAmenities()
    {
        return $this->userAmenityRepo->getUserAmenities( \Auth::user()->id );
    }

    public function storeUserAmenity(array $amenity)
    {
        return $this->userAmenityRepo->storeUserAmenity($amenity, \Auth::user()->id);
    }
}