<?php
namespace App\Domain\Repositories\Listing;

use Illuminate\Http\Request;

interface ListingRepoInterface{
    public function getListings();
    public function storeListing(Request $request);
}