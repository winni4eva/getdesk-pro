<?php

namespace App\Domain\Repositories\ListingUserAmenity;

use Illuminate\Support\ServiceProvider;

class ListingUserAmenityRepoServiceProvider extends ServiceProvider
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
        $this->app->bind(ListingUserAmenityRepoInterface::class, ListingUserAmenityRepo::class);
    }
}