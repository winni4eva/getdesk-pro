<?php
namespace App\Domain\Repositories\Listing;

use Illuminate\Http\Request;

interface ListingRepoInterface{
    public function getListings(array $request);
    public function storeListing(Request $request);
}