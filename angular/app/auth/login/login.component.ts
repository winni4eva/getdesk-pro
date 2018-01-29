import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {LoginInterface} from './login.interface';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {CustomValidator} from '../../shared/validator/custom-validator.service';
import {ToasterService} from 'angular2-toaster';
import {StorageService} from '../../shared/storage/storage.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styles: [`
        body{text-align: center;}
        .errorAlert{color: red;}
    `]
})
export class LoginComponent implements OnInit {
    
    private loginForm;
    public loader;
    private _options = {
        position: ["top", "right"],
        timeOut: 9000,
        lastOnBottom: true
    }

    constructor(
                private _loginService: AuthService,
                private _router: Router,
                private _toasterService: ToasterService,
                private _storageService: StorageService) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, CustomValidator.mailFormat]),
            password: new FormControl('', [Validators.required,Validators.minLength(4)])
        });

        //if(this._storageService.get('gdToken'))
            //this._router.navigate(['/dashboard']);
    }

    login(model: LoginInterface, isValid: boolean){

        if(!isValid) return;
        
        this._loginService.postLogin(model)
            .subscribe( (data: any) => {
                this._toasterService.pop('success', 'Login', data.success);
                if(data.user)
                    this._loginService.setAuthUserData(data.user);
                if(data.token)
                    this._loginService.setAuthUserToken(data.token);
                this._router.navigate(['/dashboard']);
            },
            error => {
                this._toasterService.pop('error', 'Login', error );
            })
    }

}