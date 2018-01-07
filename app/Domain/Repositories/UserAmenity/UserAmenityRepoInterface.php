<?php
namespace App\Domain\Repositories\UserAmenity;

interface UserAmenityRepoInterface{
    public function getUserAmenities(int $userId);
    public function storeUserAmenity(array $amenity, int $userId);
}