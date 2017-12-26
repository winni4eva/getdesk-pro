import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../shared/storage/storage.service';
import {DashboardService} from '../dashboard/dashboard.service';
import {AuthService} from '../auth/auth.service';
import {ToasterService} from 'angular2-toaster';

@Component({
    selector: 'dash-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    userDetails;
    
    constructor(private _router: Router,
        private _storage: StorageService,
        private _dashBoardService: DashboardService,
        private _loginService: AuthService,
        private _toasterService: ToasterService) {}

    ngOnInit() {
        this.userDetails = JSON.parse( this._storage.get('gdUser') );
    }

    logout(){
        this._loginService.getLogout().subscribe(
            response => {
                this._toasterService.pop('success', 'Logout', response.success);
                this._storage.remove('gdUser');
                this._storage.remove('gdToken');
                this._router.navigate(['/login']);
            },
            error => this._toasterService.pop('error', 'Login', error )
        )
    }

}