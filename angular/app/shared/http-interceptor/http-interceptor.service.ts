import {Injectable, Injector,Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, RequestOptions, Request, RequestOptionsArgs, ConnectionBackend, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';
import {StorageService} from '../storage/storage.service';
import {ReflectiveInjector} from '@angular/core';
//import {NotificationService} from '../../shared/notification/notification.service';
//import {LoaderService} from '../../shared/loading-bar/loading-bar.service';
import {Subject} from "rxjs/Subject";
import {HttpInterceptorEvent} from "./http-interceptor.event";

@Injectable()
export class HttpInterceptor extends Http{

    private _notification;

    private _localStorage: StorageService;

    notify;

    message;

    // customHtttp

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private customHtttp: HttpInterceptorEvent) {

        super(backend, defaultOptions);
        const injector = ReflectiveInjector.resolveAndCreate( [ StorageService, HttpInterceptorEvent ] );
        //this._notification = injector.get(NotificationService);
        this._localStorage = injector.get(StorageService);
        // this.customHtttp = injector.get(HttpInterceptorEvent);

    }

    connect(notify = true, message=""){
        this.notify = notify;
        this.message = message;

        return this;
    }
    
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.request(url, this.getRequestOptionArgs(options)));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.get(url,this.getRequestOptionArgs(options)));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.delete(url, this.getRequestOptionArgs(options)));
    }
    
    getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {

        // this.customHtttp.requestStatusEvent("loading...");

        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }

        if(this._localStorage.get("store")){
            options.headers.append('X-Store-ID', this._localStorage.get("store")["id"]);
        }

        if(this._localStorage.get("platform")){
            options.headers.append('X-Platform-ID', this._localStorage.get("platform")["id"]);
            options.headers.append('X-Platform-Name', this._localStorage.get("platform")["name"]);
        }

        //if(window.Echo.socketId()){
            //options.headers.append('X-Socket-ID', window.Echo.socketId());
        //}
        
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Authorization', 'Bearer '  +  this._localStorage.get('gdToken') );

        return options;
        
    }

    intercept(observable: Observable<Response>): Observable<any> {

        return observable.catch((err, source) => {
            console.log("intercept response");
            console.log(err);
            //this.customHtttp.requestStatusEvent("");

            if (err.status  == 401) {
                //this._localStorage.remove('gdToken');
                //this._localStorage.remove('isAuthenticated');
                //window.location.assign('/login');
                return Observable.empty();
            } else {
                return Observable.throw(err);
            }
        });

    }

}
