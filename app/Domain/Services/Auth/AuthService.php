<?php
namespace App\Domain\Services\Auth;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Exceptions\Auth\InvalidCredentialsException;

class AuthService {
    use AuthenticatesUsers;

    public function __construct()
    {
        //
    }

    // public function loginUser(array $credentials)
    // {
    //     logger($credentials);
    //     return $token = $this->guard()->attempt($credentials);
    //         //throw new InvalidCredentialsException;
        
    //     //return $token;
    // }
}