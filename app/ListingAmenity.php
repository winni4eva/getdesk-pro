<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ListingAmenity extends Model
{
    protected $fillable = ['listing_id','amenity_id'];

    public function amenity()
    {
        return $this->belongsTo(Amenity::class);
    }
}
