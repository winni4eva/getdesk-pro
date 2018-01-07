<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListingPricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listing_prices', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('listing_id')->unsigned();
            $table->foreign('listing_id','listing_prices_listing_id_fk')
                ->references('id')
                ->on('listings')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->integer('pricing_period_id')->unsigned();
            $table->foreign('pricing_period_id','listing_prices_pricing_period_id_fk')
                ->references('id')
                ->on('pricing_periods')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->decimal('price')->default(0.00);
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
        Schema::dropIfExists('listing_prices');
    }
}
