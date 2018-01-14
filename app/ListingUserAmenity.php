<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ListingUserAmenity extends Model
{
    protected $fillable = ['listing_id','user_amenities_id'];

    public function userAmenity()
    {
        return $this->belongsTo(UserAmenity::class);
    }
}
