<?php
namespace App\Domain\Repositories\PricingPeriod;

use App\PricingPeriod;

class PricingPeriodRepo implements PricingPeriodRepoInterface{

    protected $model;

    public function __construct(PricingPeriod $model)
    {
        $this->model = $model;
    }
    
    public function getPricingPeriods(){
        return $this->model->get();
    }
}