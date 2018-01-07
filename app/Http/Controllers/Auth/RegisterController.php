<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use App\Domain\Services\Auth\AuthService;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * .
     *
     * @var string
     */
    protected $directorySeparator = DIRECTORY_SEPARATOR;

     /**
     * .
     *
     * @var string
     */
    protected $authService;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(AuthService $authService)
    {
        $this->middleware('guest');
        $this->authService = $authService;
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'profile_img_path' => 'required|mimes:jpeg,png'
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return Response
     */
    public function create(Request $request)
    {
    
        $validator = $this->validator($request->all());

        if($validator->fails())
            return response()->json(["error"=> $validator->errors()->first()], 403);

        $profile_img_path = $this->storeProfileImage( $request );

        User::create(
            collect($request)->put('profile_img_path', $profile_img_path)
                ->only('first_name', 'last_name', 'email', 'password', 'profile_img_path')
                ->all()
        );

        //$credentials = $request->only('email','password');
        
        //$token = $this->authService->loginUser($credentials);

        return response()->json(['success'=>'User registered successfully...'], 200);
        
    }

    /**
     * Store a users profile image.
     *
     * @param  array  $data
     * @return string $imageUrl
     */
    protected function storeProfileImage($request)
    {
        $image = $request->file('profile_img_path');

        $storagePath = public_path()."{$this->directorySeparator}img{$this->directorySeparator}profile{$this->directorySeparator}".$request->get('email');

        if(! file_exists($storagePath))
            mkdir($storagePath, 0777, true);
        
        $img_path = $image->move($storagePath, $image->getClientOriginalName());

        $imageUrl = "img{$this->directorySeparator}profile{$this->directorySeparator}".$request->get('email').'/'.$image->getClientOriginalName();

        return $imageUrl;   
    }

}
