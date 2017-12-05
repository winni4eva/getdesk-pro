<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;

class TestController extends BaseController
{
    public function __construct(){}

    public function __invoke()
    {
        return response()->json([
            'success' => 'Fetched user successfully',
            'user' => ['first_name'=>'adam','last_name'=>'winnipass']
        ],200);
    }
}
