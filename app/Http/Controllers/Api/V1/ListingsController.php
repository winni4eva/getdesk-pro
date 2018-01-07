<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use App\Domain\Services\Listing\ListingService;

class ListingsController extends BaseController
{

    protected $listingService;

    public function __construct(ListingService $listingService)
    {
        $this->listingService = $listingService;
    }

    public function store(Request $request)
    {
        $this->listingService->storeListing($request);

        return response()->json(['success'=>'Desk listing stored successfully..']);
    }
}
