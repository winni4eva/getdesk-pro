<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        \Illuminate\Auth\AuthenticationException::class,
        \Illuminate\Auth\Access\AuthorizationException::class,
        \Symfony\Component\HttpKernel\Exception\HttpException::class,
        \Illuminate\Database\Eloquent\ModelNotFoundException::class,
        \Illuminate\Session\TokenMismatchException::class,
        \Illuminate\Validation\ValidationException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        if($exception instanceof Tymon\JWTAuth\Exceptions\TokenExpiredException)
        {
            return response()->json( $this->errorMessage('token_expired'), 401 );
        } 
        else if ($exception instanceof Tymon\JWTAuth\Exceptions\TokenInvalidException || get_class($exception) == 'Tymon\JWTAuth\Exceptions\TokenInvalidException')
        {
            return response()->json( $this->errorMessage('token_invalid'), 401);
        }
        else if($exception instanceof Auth\InvalidCredentialsException) 
        {
            return response()->json($this->errorMessage($exception->getMessage()), 403 );
        }
        else if($exception instanceof SKAgarwal\GoogleApi\Exceptions\GooglePlacesApiException || get_class($exception) == 'SKAgarwal\GoogleApi\Exceptions\GooglePlacesApiException')
        {
            return response()->json(['cities'=>['predictions'=>[]]], 200);
        }
        return parent::render($request, $exception);
    }

    /**
     * Convert an authentication exception into an unauthenticated response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Auth\AuthenticationException  $exception
     * @return \Illuminate\Http\Response
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        if ($request->expectsJson()) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }

        return redirect()->guest(route('login'));
    }

    /**
     * Create message for error response.
     *
     * @param  string $message
     * @return array $message
     */
    private function errorMessage($message = "Something unusual happened"){
        return ['error' => $message];
    }
}
