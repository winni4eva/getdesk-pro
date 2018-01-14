import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../../shared/storage/storage.service';
import {ToasterService} from 'angular2-toaster';
import {DeskService} from './desks.service';

@Component({
    selector: 'desks',
    templateUrl: './desks.component.html'
})
export class DeskComponent implements OnInit {
    totalListings = 0;
    constructor(private _router: Router,
                private _storage: StorageService,
                private _toasterService: ToasterService,
                private _deskService: DeskService) {}

    ngOnInit(){
        this.getDesksCount();
    }

    clickedTab(selectedTab){
        this._router.navigate(["/dashboard/desks/"+selectedTab]);
    }

    getDesksCount(){
        this._deskService.getListings('dashboard').subscribe(
            response=>this.totalListings=response.listings.listings.length,
            error=>console.log(error)
        )
    }

}