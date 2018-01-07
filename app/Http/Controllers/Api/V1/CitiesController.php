<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use App\Domain\Services\Category\CategoryService;
use GooglePlaces;

class CitiesController extends BaseController
{

    protected $categoryService;

    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    public function index(Request $request)
    {
        $cities = GooglePlaces::placeAutocomplete($request->get('location'));
        //logger($cities);

        return response()->json(compact('cities'), 200);
    }
}
