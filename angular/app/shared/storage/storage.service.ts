import { Injectable } from "@angular/core";
// import {LocalStorageService, SessionStorageService, KeyStorageHelper} from 'ng2-webstorage';
//import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';


@Injectable()
export class StorageService{

    //storage: LocalStorageService;

    constructor(){
        //this.storage =  new LocalStorageService;
        // KeyStorageHelper.setStorageKeyPrefix('');
        // KeyStorageHelper.setStorageKeySeparator('');
    }

    set(key: string, value: any){
        //this.storage.store(key, value);
        localStorage.setItem(key, value)

    }

    get(key: string){
        //return this.storage.retrieve(key);
        return localStorage.getItem(key);
    }
    
    update(key: string , value: any){
        //this.storage.clear(key);
        //this.storage.store(key, value);
    }

    remove(key: string){
        //this.storage.clear(key);
        localStorage.removeItem(key)
    }

    removeAll(){
        //this.storage.clear();
    }

    truncate(){}

}