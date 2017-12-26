<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListingOpeningHoursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listing_opening_hours', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('listing_id')->unsigned();
            $table->foreign('listing_id','listing_opening_hours_listing_id_fk')
	            ->references('id')
	            ->on('listings')
	            ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->integer('day_id')->unsigned();
            $table->foreign('day_id','listing_opening_hours_day_id_fk')
	            ->references('id')
	            ->on('days')
	            ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->integer('times_id')->unsigned();
            $table->foreign('times_id','listing_opening_hours_times_id_fk')
                ->references('id')
                ->on('times')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('listing_opening_hours');
    }
}
