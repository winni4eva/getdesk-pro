<?php

use Illuminate\Database\Seeder;
use App\Day;

class DayTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
        
        collect($days)->filter(function($item, $key){
            return !Day::where('name', ucwords($item))->first();
        })->map(function($day, $key){
            return Day::firstOrCreate([
                'name'=> ucfirst($day)
            ]);
        });
    }
}
