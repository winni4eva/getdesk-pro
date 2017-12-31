<?php
namespace App\Domain\Repositories\Amenity;

use App\Amenity;

class AmenityRepo implements AmenityRepoInterface{

    protected $model;

    public function __construct(Amenity $model)
    {
        $this->model = $model;
    }
    
    public function getAmenities(){
        return $this->model->get();
    }
}