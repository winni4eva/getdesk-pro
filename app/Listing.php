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

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function subCategory()
    {
        return $this->belongsTo(SubCategory::class);
    }

    public function user(){
        return $this->belongsToMany(User::class, 'user_listings')->withTimestamps();
    }

    public function images()
    {
        return $this->hasMany(ListingImage::class);
    }

    public function prices()
    {
        return $this->hasMany(ListingPrice::class);
    }

    // public function scopeCategory (Builder $query, $categoryName) {
    //     return $query->whereHas('category', function ($q) use ($categoryName) {
    //             $q->where('name', 'LIKE','%'.$categoryName.'%');
    //     });
    // }
}
