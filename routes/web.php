<?php

use App\Events\TaskEvent;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'AngularController@serve');

Route::get('event', function(Request $request){
    event(new TaskEvent('Hey how are you!!'));
    echo "sending event";
});

