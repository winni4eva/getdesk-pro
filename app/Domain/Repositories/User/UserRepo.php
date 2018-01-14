<?php
namespace App\Domain\Repositories\User;

use App\User;

class UserRepo implements UserRepoInterface{

    protected $model;

    public function __construct(User $model)
    {
        $this->model = $model;
    }
    
    public function getListings(int $userId){
        return $this->model->with([
            'listings',
            'listings.openingHours',
            'listings.openingHours.startTime',
            'listings.openingHours.endTime',
            'listings.openingHours.day',
            'listings.amenities',
            'listings.amenities.amenity',
            'listings.userAmenities',
            'listings.userAmenities.userAmenity',
            'listings.category',
            'listings.subCategory',
            'listings.images']
        )->find($userId);
    }
}