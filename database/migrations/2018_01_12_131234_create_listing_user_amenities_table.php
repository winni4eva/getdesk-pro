<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListingUserAmenitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listing_user_amenities', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('listing_id')->unsigned();
            $table->foreign('listing_id','listin_amenities_listing_id_fk')
	            ->references('id')
	            ->on('listings')
	            ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->integer('user_amenities_id')->unsigned();
            $table->foreign('user_amenities_id','listing_amenities_user_amenities_id_fk')
                ->references('id')
                ->on('user_amenities')
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
        Schema::dropIfExists('listing_user_amenities');
    }
}
