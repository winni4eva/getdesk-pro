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
        return this._http.get( '/api/categories')
            .map(this.extractData)
            .catch(this.handleError);
    }

    getSubCategories(categoryId){
        return this._http.get( '/api/sub_categories/'+categoryId)
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

    getAmenities(){
        return this._http.get( '/api/amenities')
            .map(this.extractData)
            .catch(this.handleError);
    }

    getUserAmenities(){
        return this._http.get( '/api/v1/user_amenities')
            .map(this.extractData)
            .catch(this.handleError);
    }

    getPricingPeriods(){
        return this._http.get( '/api/v1/pricing_periods')
            .map(this.extractData)
            .catch(this.handleError);
    }

    getOccupants(){
        return [
            4,8,10,20,30,100
        ];
    }

    addUserAmenity(amenity){
        return this._http.post( '/api/v1/user_amenities', JSON.stringify( amenity ) )
                    .map(this.extractData)
                    .catch(this.handleError);
    }
    
    searchLocation(location){
        return this._http.get( `/api/v1/cities?location=${location}`)
            .map(this.extractData)
            .catch(this.handleError); 
    }

    storeDeskListing(storedForm, images){
        return Observable.create(observer => {
            let formData: FormData = new FormData(),
            xhr: XMLHttpRequest = new XMLHttpRequest();

            for(let i = 0; i < images.length; i++)
                formData.append("image "+i, images[i].data, images[i].name);

            formData.append("details", JSON.stringify(storedForm.details) );
            formData.append("amenities", JSON.stringify(storedForm.amenities) );
            formData.append("pricing", JSON.stringify(storedForm.pricing) );

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
            xhr.open('POST', '/api/v1/listings' , true);
            let authToken = 'Bearer '  +  localStorage.getItem('gdToken');
            xhr.setRequestHeader('Authorization', authToken );
            xhr.setRequestHeader('Accept', 'application/json' );
            xhr.send(formData);

        }).map(response => {return response})
        .catch(this.handleError);
    }

    getListings(page = 'home'){
        return this._http.get( `/api/v1/listings?page=${page}`)
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