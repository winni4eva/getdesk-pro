import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/delay';
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpInterceptorEvent {

    private _requestStatus = new Subject<any>();

    requestStatusEvent$ = this._requestStatus.asObservable();

    requestStatusEvent(requestStatus){
        this._requestStatus.next(requestStatus)

        this.requestStatusEvent$.subscribe((response) => {
            console.log("am here ooo")
            console.log(response)
        });
    }

}