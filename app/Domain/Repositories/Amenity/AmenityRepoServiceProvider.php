<?php

namespace App\Domain\Repositories\Amenity;

use Illuminate\Support\ServiceProvider;

class AmenityRepoServiceProvider extends ServiceProvider
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
        $this->app->bind(AmenityRepoInterface::class, AmenityRepo::class);
    }
}