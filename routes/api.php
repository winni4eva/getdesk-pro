<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['namespace' => 'Auth'], function () {
    
    /** Auth Routes */
    Route::post('login', 'LoginController@login')->name('login');
    Route::get('logout', 'LoginController@logout');

    Route::post('signup', 'RegisterController@create');

    /** Password Reset Routes */
    //Route::post("password/reset", "ResetPasswordController@reset");
    //Route::post("password/reset/{token}", "ResetPasswordController@resetPassword");
    
});

Route::group(['prefix' => 'v1', 'namespace' => 'Api\V1', 'middleware' => 'auth:api'], function () {
    Route::get('user','TestController');
});
