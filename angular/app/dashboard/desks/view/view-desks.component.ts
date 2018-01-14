import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../../../shared/storage/storage.service';
import {ToasterService} from 'angular2-toaster';
import {DeskService} from '../desks.service';

@Component({
    selector: 'view-desks',
    templateUrl: './view-desks.component.html'
})
export class ViewDesksComponent implements OnInit {

    listings: Array<any> = [];

    constructor(private _router: Router,
                private _storage: StorageService,
                private _toasterService: ToasterService,
                private _deskService: DeskService) {}

    ngOnInit() {
        this.getDesks();
    }
    
    getDesks(){
        this._deskService.getListings('dashboard').subscribe(
            response=>this.listings=response.listings.listings,
            error=>console.log(error)
        )
    }
}