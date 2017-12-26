<?php

use Illuminate\Database\Seeder;
use App\Time;

class TimeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        for ($i=1; $i < 13; $i++) { 
            collect($this->addTimeMeta($i))->filter(function($time){
                return !Time::where(['time'=>$time[0], 'period'=>$time[1]])->first();
            })->map(function($time){
                return Time::firstOrCreate([
                    'time'=>$time[0],
                    'period'=>$time[1]
                ]);
            });
        }
    }

    private function addTimeMeta(string $time): array
    {
        return [
            [$time.':00', 'am'],
            [$time.':30', 'am'],
            [$time.':00', 'pm'],
            [$time.':30', 'pm']
        ];
    }
}
