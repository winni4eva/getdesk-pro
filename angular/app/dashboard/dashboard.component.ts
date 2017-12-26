import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../shared/storage/storage.service';
import {DashboardService} from './dashboard.service';
import {AuthService} from '../auth/auth.service';
import {ToasterService} from 'angular2-toaster';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    userDetails: Object = {};

    constructor(private _router: Router,
                private _storage: StorageService,
                private _dashBoardService: DashboardService,
                private _loginService: AuthService,
                private _toasterService: ToasterService) {}

    ngOnInit() {
        this.userDetails = JSON.parse( this._storage.get('gdUser') );
    }

}