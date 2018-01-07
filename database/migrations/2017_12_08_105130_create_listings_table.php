<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listings', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('category_id')->unsigned();
            $table->foreign('category_id','listings_category_id_fk')
	            ->references('id')
	            ->on('categories')
	            ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->integer('sub_category_id')->unsigned();
            $table->foreign('sub_category_id','listings_sub_category_id_fk')
	            ->references('id')
	            ->on('sub_categories')
	            ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->string('name');    
            $table->integer('number_of_occupants')->unsigned()->default(0);
            $table->string('city')->default('');
            $table->boolean('availability')->default(1);
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
        Schema::dropIfExists('listings');
    }
}
