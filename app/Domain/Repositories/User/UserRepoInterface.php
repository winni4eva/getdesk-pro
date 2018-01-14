<?php
namespace App\Domain\Repositories\User;

interface UserRepoInterface{
    public function getListings(int $userId);
}