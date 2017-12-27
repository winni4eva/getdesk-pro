<?php

namespace App\Domain\Repositories\SubCategory;

interface SubCategoryRepoInterface{

    public function getSubCategories(int $categoryId);
    
}