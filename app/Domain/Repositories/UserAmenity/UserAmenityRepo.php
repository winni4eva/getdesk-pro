<?php
namespace App\Domain\Repositories\UserAmenity;

use App\UserAmenity;

class UserAmenityRepo implements UserAmenityRepoInterface{

    protected $model;

    public function __construct(UserAmenity $model)
    {
        $this->model = $model;
    }
    
    public function storeUserAmenity(array $amenity, int $userId)
    {
        return $this->model->updateOrCreate(
            ['user_id'=>$userId,'amenity'=>$amenity['amenity']],
            ['user_id'=>$userId,'amenity'=>$amenity['amenity']]
        );
    }
    
    public function getUserAmenities(int $userId){
        return $this->model->where('user_id', $userId)->get();
    }
}