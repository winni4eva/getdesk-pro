<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListingAmenitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listing_amenities', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('listing_id')->unsigned();
            $table->foreign('listing_id','listing_amenities_listing_id_foreign_key')
	            ->references('id')
	            ->on('listings')
	            ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->integer('amenity_id')->unsigned();
            $table->foreign('amenity_id','listing_amenities_amenity_id_foreign_key')
                ->references('id')
                ->on('amenities')
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
        Schema::dropIfExists('listing_amenities');
    }
}
