<?php

namespace App\Domain\Services\Category;

use App\Domain\Repositories\Category\CategoryRepoInterface;

class CategoryService {
    
    protected $categoryRepo;

    public function __construct(CategoryRepoInterface $categoryRepo)
    {
        $this->categoryRepo = $categoryRepo;
    }

    public function getCategories()
    {
        return $this->categoryRepo->getCategories();
    }
}