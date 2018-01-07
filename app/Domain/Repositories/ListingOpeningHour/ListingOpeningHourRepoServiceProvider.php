<?php

namespace App\Domain\Repositories\ListingOpeningHour;

use Illuminate\Support\ServiceProvider;

class ListingOpeningHourRepoServiceProvider extends ServiceProvider
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
        $this->app->bind(ListingOpeningHourRepoInterface::class, ListingOpeningHourRepo::class);
    }
}