<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use App\Domain\Services\SubCategory\SubCategoryService;

class SubCategoriesController extends BaseController
{
    protected $subCategoryService;

    public function __construct(SubCategoryService $subCategoryService)
    {
        $this->subCategoryService = $subCategoryService;
    }

    public function index(int $categoryId){
        
        $subCategories = $this->subCategoryService->getSubCategories($categoryId);

        return response()->json(compact('subCategories'));
    }

    public function show(int $categoryId){
        
        $subCategories = $this->subCategoryService->getSubCategories($categoryId);

        return response()->json(compact('subCategories'));
    }
}
