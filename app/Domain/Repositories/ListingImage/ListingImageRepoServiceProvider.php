<?php

namespace App\Domain\Repositories\ListingImage;

use Illuminate\Support\ServiceProvider;

class ListingImageRepoServiceProvider extends ServiceProvider
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
        $this->app->bind(ListingImageRepoInterface::class, ListingImageRepo::class);
    }
}