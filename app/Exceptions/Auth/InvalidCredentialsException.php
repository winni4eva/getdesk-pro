<?php

namespace App\Exceptions\Auth;

use Tymon\JWTAuth\Exceptions\JWTException;
use Exception;

class InvalidCredentialsException extends JWTException
{
    /**
     * @var int
     */
    
    public function __construct($code = 403, Exception $previous = null)
    {
        parent::__construct('Email and password combination error', $code, $previous);
    }
}
