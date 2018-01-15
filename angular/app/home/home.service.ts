import { Injectable } from "@angular/core";
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {StorageService} from '../shared/storage/storage.service';

@Injectable()
export class HomeService{

    private _apiUrl: string = '/api/';

    constructor(private _http: Http,
                private _storage: StorageService){}

    getListings(page: 'home'){
        return this._http.get( this._apiUrl+`listings?page=${page}`)
                    .map(this.extractData)
                    .catch(this.handleError);
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