<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use App\Domain\Services\Listing\ListingService;
use App\Domain\Services\User\UserService;
use App\Domain\Services\Map\GoogleMapService;

class ListingsController extends BaseController
{

    protected $listingService;

    protected $userService;

    protected $googleMapService;

    public function __construct(ListingService $listingService, UserService $userService,
                                GoogleMapService $googleMapService)
    {
        $this->listingService = $listingService;
        $this->userService = $userService;
        $this->googleMapService = $googleMapService;
    }

    public function index(Request $request)
    {
        $geoCodes = [];
        if($request->get('page')=='dashboard')
        {
            $listings = $this->userService->getListings($request->all());
        }
        else
        {
            $listings = $this->listingService->getListings($request->all());
            $geoCodes = $this->googleMapService->getGeoCodes($listings->toArray());
        }

        return response()->json(compact('listings','geoCodes'));
    }

    public function store(Request $request)
    {
        $this->listingService->storeListing($request);

        return response()->json(['success'=>'Desk listing stored successfully..']);
    }

    public function searchListings(Request $request)
    {
        $listings = $this->listingService->getListings($request->all());

        $geoCodes = $this->googleMapService->getGeoCodes($listings->toArray());

        return response()->json(compact('listings','geoCodes'));
    }
}
