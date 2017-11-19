import { Injectable } from "@angular/core";
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {StorageService} from '../shared/storage/storage.service';
@Injectable()
export class AuthService{

    //private _loginApiUrl: string = '/api/login';
    

    public redirectUrl: string = '';

    private _storeId;

    constructor(private _http: Http,
                private _storage: StorageService){}

    postLogin(loginDetails){
        return this._http.post( '/api/login', JSON.stringify( loginDetails ) )
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    postSignup(signupDetails){
        return this._http.post( '/api/signup', JSON.stringify( signupDetails ) )
                    .map(this.extractData)
                    .catch(this.handleError);
    }
 
    isLoggedIn(){
        return !!this._storage.get('isAuthenticated');
    }

    setAuthUserData(data){
        //this._storage.set('user', user);
        //this._storage.set('token', data.token);
        //this._storage.set('isAuthenticated', true);
    }

    private extractData(res: Response) {
        return res.json() || { };
    }

    private handleError (error: any) {
        let errMsg = error._body ? JSON.parse(error._body).error :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
       
        return Observable.throw(errMsg);

    }
    

}