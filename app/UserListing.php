<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserListing extends Model
{
    protected $fillable = ['user_id', 'listing_id'];
}
