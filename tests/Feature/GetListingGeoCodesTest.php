<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Listing;

class GetListingGeoCodesTest extends TestCase
{
    public function test_get_geo_codes_for_listings()
    {
        //Get listings
        $listings = Listing::get();
        
        $this->assertTrue(is_array($listings->toArray()));
        //Make api call to retrieve geo code for each listing using city name
    }
}
