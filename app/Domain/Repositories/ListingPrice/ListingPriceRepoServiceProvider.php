<?php

namespace App\Domain\Repositories\ListingPrice;

use Illuminate\Support\ServiceProvider;

class ListingPriceRepoServiceProvider extends ServiceProvider
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
        $this->app->bind(ListingPriceRepoInterface::class, ListingPriceRepo::class);
    }
}