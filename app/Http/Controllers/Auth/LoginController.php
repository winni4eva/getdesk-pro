<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Exception;
use App\Exceptions\Auth\InvalidCredentialsException;
use JWTAuth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Login User
     *
     * @param Illuminate\Http\Request $request
     * @return mixed
     */
    public function login(Request $request)
    {
        //logger($request->all());
        $credentials = $request->only('email','password');

        if(!$token = JWTAuth::attempt($credentials))
            throw new InvalidCredentialsException(401);

        logger($token);

        $user = \Auth::user();
        
        return response()->json(compact(['user','token']));
            
    }

    /**
     * Logout User
     *
     * @return mixed
     */
    public function logout()
    {
        return $this->guard()->logout();
    }
}
