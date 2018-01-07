<?php

namespace App\Domain\Services\PricingPeriod;

use App\Domain\Repositories\PricingPeriod\PricingPeriodRepoInterface;

class PricingPeriodService {
    
    protected $pricingPeriodRepo;

    public function __construct(PricingPeriodRepoInterface $pricingPeriodRepo)
    {
        $this->pricingPeriodRepo = $pricingPeriodRepo;
    }

    public function getPricingPeriods()
    {
        return $this->pricingPeriodRepo->getPricingPeriods();
    }
}