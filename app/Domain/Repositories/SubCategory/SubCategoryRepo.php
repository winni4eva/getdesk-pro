<?php
namespace App\Domain\Repositories\SubCategory;

use App\SubCategory;

class SubCategoryRepo implements SubCategoryRepoInterface{

    protected $model;

    public function __construct(SubCategory $model)
    {
        $this->model = $model;
    }
    
    public function getSubCategories(int $categoryId){
        return $this->model->where('category_id', $categoryId)->get();
    }
}