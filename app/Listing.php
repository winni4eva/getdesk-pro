<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    protected $fillable = ['category_id','sub_category_id','name','number_of_occupants','city','availability'];
}
