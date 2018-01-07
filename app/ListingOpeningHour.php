<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ListingOpeningHour extends Model
{
    protected $fillable = ['listing_id','day_id','times_id','end_time_id','opened'];
}
