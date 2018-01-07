<?php

namespace App\Domain\Repositories\ListingAmenity;

use Illuminate\Support\ServiceProvider;

class ListingAmenityRepoServiceProvider extends ServiceProvider
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
        $this->app->bind(ListingAmenityRepoInterface::class, ListingAmenityRepo::class);
    }
}