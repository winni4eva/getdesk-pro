<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use App\Domain\Services\UserAmenity\UserAmenityService;

class UserAmenitiesController extends BaseController
{
    protected $userAmenityService;

    public function __construct(UserAmenityService $userAmenityService)
    {
        $this->userAmenityService = $userAmenityService;
    }

    public function index()
    {
        $userAmenities = $this->userAmenityService->getUserAmenities();

        return response()->json(compact('userAmenities'));
    }

    public function store(Request $request)
    {
        $this->userAmenityService->storeUserAmenity($request->all());

        return response()->json(['success'=>'User amenity saved successfully!']);
    }
}
