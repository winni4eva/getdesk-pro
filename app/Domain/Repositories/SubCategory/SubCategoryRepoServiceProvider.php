<?php

namespace App\Domain\Repositories\SubCategory;

use Illuminate\Support\ServiceProvider;

class SubCategoryRepoServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(SubCategoryRepoInterface::class, SubCategoryRepo::class);
    }
}