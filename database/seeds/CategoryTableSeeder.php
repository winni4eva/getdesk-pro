<?php

use Illuminate\Database\Seeder;
use App\Category;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = ['work space','meeting space','event space'];
        
        collect($categories)->filter(function($item, $key){
            return !Category::where('name', ucwords($item))->first();
        })->map(function($category, $key){
            return Category::firstOrCreate([
                'name'=> ucwords($category)
            ]);
        });
    }
}
