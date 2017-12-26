<?php

use Illuminate\Database\Seeder;
use App\Category;
use App\SubCategory;

class SubCategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            'work space' => ['coworking space','corporate office','startup office'],
            'meeting space' => ['business center','hotel'],
            'event space' => ['weddings','parties','festivals']
        ];
        
        collect($categories)->map(function($subCategories, $key){
            $category = Category::where('name', ucwords($key))->first();
            if($category){
                collect($subCategories)->map(function($cat, $j)use($category){
                    return SubCategory::firstOrCreate([
                        'category_id'=>$category->id,
                        'name'=> ucwords($cat)
                    ]);
                });
            }
        });
    }
}
