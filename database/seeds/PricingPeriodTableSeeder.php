<?php

use Illuminate\Database\Seeder;
use App\PricingPeriod;

class PricingPeriodTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $periods = ['hourly','daily','monthly'];
        
        collect($periods)->filter(function($item, $key){
            return !PricingPeriod::where('name', ucfirst($item))->first();
        })->map(function($period, $key){
            return PricingPeriod::firstOrCreate([
                'name'=> ucfirst($period)
            ]);
        });
    }
}
