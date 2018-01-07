<?php

namespace App\Domain\Repositories\Listing;

use Illuminate\Support\ServiceProvider;

class ListingRepoServiceProvider extends ServiceProvider
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
        $this->app->bind(ListingRepoInterface::class, ListingRepo::class);
    }
}