<?php

use Illuminate\Database\Seeder;
use App\Amenity;

class AmenityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $amenities = ['24/7 Option','Cafe / Restaurant','Lockers','Meeting Rooms','Phone Booth / Room','Wifi'
        ,'Comfortable Sofa','Shared Kitchen','Air Condition','Pets Allowed','Projector','Printers / Scanner'];
        
        collect($amenities)->filter(function($item, $key){
            return !Amenity::where('amenity', $item)->first();
        })->map(function($amenity, $key){
            return Amenity::firstOrCreate([
                'amenity'=>$amenity
            ]);
        });
    }
}
