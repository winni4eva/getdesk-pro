<?php
namespace App\Domain\Services\Map;

use Geocode;

class GoogleMapService
{

    public function getGeoCodes(array $listings)
    {
        return collect($listings)->map(function($listing){
            $key = "GmapsGeocode{$listing['city']}";
            if(cache()->has($key))
                return cache($key);

            $response = Geocode::make()->address($listing['city']);
            if($response)
            {
                $data = ['latitude' => $response->latitude(),'longitude' => $response->longitude()];
                cache([$key =>  $data], '600000');//416 days
                return $data;
            }
        })->all();
    }
}
