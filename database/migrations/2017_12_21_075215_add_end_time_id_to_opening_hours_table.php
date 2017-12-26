<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddEndTimeIdToOpeningHoursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('listing_opening_hours', function(Blueprint $table){
            $table->integer('end_time_id')->after('times_id');
            $table->boolean('opened')->default(0)->after('end_time_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('listing_opening_hours', function(Blueprint $table){
            $table->dropColumn('end_time_id');
            $table->dropColumn('opened');
        });
    }
}
