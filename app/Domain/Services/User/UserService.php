<?php

namespace App\Domain\Services\User;

use App\Domain\Repositories\User\UserRepoInterface;

class UserService {
    
    protected $userRepo;

    public function __construct(UserRepoInterface $userRepo)
    {
        $this->userRepo = $userRepo;
    }

    public function getListings()
    {
        return $this->userRepo->getListings( \Auth::user()->id );
    }
}