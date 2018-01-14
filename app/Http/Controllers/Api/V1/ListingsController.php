<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use App\Domain\Services\Listing\ListingService;
use App\Domain\Services\User\UserService;

class ListingsController extends BaseController
{

    protected $listingService;

    protected $userService;

    public function __construct(ListingService $listingService, UserService $userService)
    {
        $this->listingService = $listingService;
        $this->userService = $userService;
    }

    public function index(Request $request)
    {
        if($request->get('page')=='dashboard')
            $listings = $this->userService->getListings();
        else
            $listings = $this->listingService->getListings();
            
        return response()->json(compact('listings'));
    }

    public function store(Request $request)
    {
        $this->listingService->storeListing($request);

        return response()->json(['success'=>'Desk listing stored successfully..']);
    }
}
