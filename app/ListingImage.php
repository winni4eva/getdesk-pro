<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ListingImage extends Model
{
    protected $fillable = ['listing_id','img_path'];
}
