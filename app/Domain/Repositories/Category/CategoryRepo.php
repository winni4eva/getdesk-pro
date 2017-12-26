<?php
namespace App\Domain\Repositories\Category;

use App\Category;

class CategoryRepo implements CategoryRepoInterface{

    protected $model;

    public function __construct(Category $model)
    {
        $this->model = $model;
    }
    
    public function getCategories(){
        return $this->model->get();
    }
}