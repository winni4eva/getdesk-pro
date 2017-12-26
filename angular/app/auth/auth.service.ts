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

    getLogout(){
        return this._http.get('/api/logout')
            .map(this.extractData)
            .catch(this.handleError);
    }

    postSignup(signupDetails, files){

        return Observable.create(observer => {
            
            let formData: FormData = new FormData(),
            xhr: XMLHttpRequest = new XMLHttpRequest();
            formData.append("first_name", signupDetails.first_name);
            formData.append("last_name", signupDetails.last_name);
            formData.append("email", signupDetails.email);
            formData.append("password", signupDetails.password);
            formData.append("password_confirmation", signupDetails.password_confirmation);
            
            if(files){
                for (let i = 0; i < files.length; i++) {
                    //console.log(files[i]);
                    formData.append("profile_img_path", files[i], files[i].name);
                }
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }
            };

            //xhr.upload.onprogress = (event) => {
                //this.progress = Math.round(event.loaded / event.total * 100);

                //this.progressObserver.next(this.progress);
            //};

            xhr.open('POST', '/api/signup' , true);
            let authToken = 'Bearer '  +  localStorage.getItem('gdToken');
            xhr.setRequestHeader('Authorization', authToken );
            xhr.setRequestHeader('Accept', 'application/json' );
            xhr.send(formData);

        }).map(this.extractData)
        .catch(this.handleError);
    }
 
    isLoggedIn(){
        return !!this._storage.get('isAuthenticated');
    }

    setAuthUserData(data){
        this._storage.set('gdUser', JSON.stringify(data));
        //this._storage.set('gdToken', data.token);
    }

    setAuthUserToken(token: string){
        this._storage.set('gdToken', token);
        this._storage.set('isAuthenticated', true);
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