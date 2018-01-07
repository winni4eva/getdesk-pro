<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use App\Domain\Services\PricingPeriod\PricingPeriodService;

class PricingPeriodsController extends BaseController
{
    protected $pricingPeriodService;

    public function __construct(PricingPeriodService $pricingPeriodService)
    {
        $this->pricingPeriodService = $pricingPeriodService;
    }

    public function index()
    {
        $pricingPeriods = $this->pricingPeriodService->getPricingPeriods();
        
        return response()->json(compact('pricingPeriods'));
    }
}
