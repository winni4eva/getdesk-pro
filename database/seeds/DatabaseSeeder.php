<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AmenityTableSeeder::class);
        $this->call(CategoryTableSeeder::class);
        $this->call(SubCategoryTableSeeder::class);
        $this->call(DayTableSeeder::class);
        $this->call(TimeTableSeeder::class);
        $this->call(PricingPeriodTableSeeder::class);
    }
}
