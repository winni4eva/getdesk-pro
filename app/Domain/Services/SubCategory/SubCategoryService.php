<?php

namespace App\Domain\Services\SubCategory;

use App\Domain\Repositories\SubCategory\SubCategoryRepoInterface;

class SubCategoryService {
    
    protected $subCategoryRepo;

    public function __construct(SubCategoryRepoInterface $subCategoryRepo)
    {
        $this->subCategoryRepo = $subCategoryRepo;
    }

    public function getSubCategories()
    {
        return $this->subCategoryRepo->getSubCategories();
    }
}