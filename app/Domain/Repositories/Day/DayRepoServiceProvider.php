<?php

namespace App\Domain\Repositories\Day;

use Illuminate\Support\ServiceProvider;

class DayRepoServiceProvider extends ServiceProvider
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
        $this->app->bind(DayRepoInterface::class, DayRepo::class);
    }
}