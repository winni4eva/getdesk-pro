<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ListingPrice extends Model
{
    protected $fillable = ['listing_id','pricing_period_id','price'];
}
