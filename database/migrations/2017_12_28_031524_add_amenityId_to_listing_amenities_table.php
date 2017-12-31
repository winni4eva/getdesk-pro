<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAmenityIdToListingAmenitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('listing_amenities', function(Blueprint $table){
            $table->integer('amenity_id')->after('listing_id')->unsigned()->default(0);
            $table->foreign('amenity_id','listing_amenities_amenity_id_fk')
                ->references('id')
                ->on('amenities')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('listing_amenities', function(Blueprint $table){
            $table->dropColumn('amenity_id');
        });
    }
}
