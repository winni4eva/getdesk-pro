<?php

namespace App\Domain\Repositories\UserAmenity;

use Illuminate\Support\ServiceProvider;

class UserAmenityRepoServiceProvider extends ServiceProvider
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
        $this->app->bind(UserAmenityRepoInterface::class, UserAmenityRepo::class);
    }
}