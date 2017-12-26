import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../../shared/storage/storage.service';
import {ToasterService} from 'angular2-toaster';

@Component({
    selector: 'desks',
    templateUrl: './desks.component.html'
})
export class DeskComponent implements OnInit {

    constructor(private _router: Router,
                private _storage: StorageService,
                private _toasterService: ToasterService) {}

    ngOnInit(){}

    clickedTab(selectedTab){
        this._router.navigate(["/dashboard/desks/"+selectedTab]);
    }

}