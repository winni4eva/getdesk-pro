<?php

namespace App\Domain\Repositories\PricingPeriod;

use Illuminate\Support\ServiceProvider;

class PricingPeriodRepoServiceProvider extends ServiceProvider
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
        $this->app->bind(PricingPeriodRepoInterface::class, PricingPeriodRepo::class);
    }
}