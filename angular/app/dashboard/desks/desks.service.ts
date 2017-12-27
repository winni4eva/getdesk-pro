import { Injectable } from "@angular/core";
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import {Http, Headers, Response, RequestOptions} from '@angular/http';

@Injectable()
export class DeskService{

    public redirectUrl: string = '';

    private _storeId;

    constructor(private _http: Http){}

    getCategories(){
        return this._http.get( '/api/v1/categories')
            .map(this.extractData)
            .catch(this.handleError);
    }

    getSubCategories(categoryId){
        return this._http.get( '/api/v1/sub_categories/'+categoryId)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getDays(){
        return this._http.get( '/api/v1/days')
            .map(this.extractData)
            .catch(this.handleError);
    }

    getTimes(){
        return this._http.get( '/api/v1/times')
            .map(this.extractData)
            .catch(this.handleError);
    }

    getOccupants(){
        return [
            4,8,10,20,30,100
        ];
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