<?php

namespace App\Domain\Repositories\Time;

use Illuminate\Support\ServiceProvider;

class TimeRepoServiceProvider extends ServiceProvider
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
        $this->app->bind(TimeRepoInterface::class, TimeRepo::class);
    }
}