<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    protected $fillable = ['category_id','sub_category_id','name','number_of_occupants','city','availability'];

    protected $casts = ['city' => 'json'];

    public function openingHours()
    {
        return $this->hasMany(ListingOpeningHour::class);
    }

    public function amenities()
    {
        return $this->hasMany(ListingAmenity::class);
    }

    public function userAmenities()
    {
        return $this->hasMany(ListingUserAmenity::class);
    }
}
