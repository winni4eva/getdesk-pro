<?php
namespace App\Domain\Repositories\SubCategory;

use App\SubCategory;

class SubCategoryRepo implements SubCategoryRepoInterface{

    protected $model;

    public function __construct(SubCategory $model)
    {
        $this->model = $model;
    }
    
    public function getSubCategories(){
        return $this->model->get();
    }
}