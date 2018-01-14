<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ListingOpeningHour extends Model
{
    protected $fillable = ['listing_id','day_id','times_id','end_time_id','opened'];

    public function startTime()
    {
        return $this->belongsTo(Time::class,'times_id');
    }

    public function endTime()
    {
        return $this->belongsTo(Time::class,'end_time_id');
    }

    public function day()
    {
        return $this->belongsTo(Day::class);
    }
}
