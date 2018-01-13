<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterListingsCityToJson extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('listings', function (Blueprint $table) {
            \DB::statement("ALTER TABLE listings CHANGE COLUMN city city JSON NULL");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('listings', function (Blueprint $table) {
            \DB::statement('ALTER TABLE listings CHANGE COLUMN city city VARCHAR (255) NOT NULL');
        });
    }
}
