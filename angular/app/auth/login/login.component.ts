import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {LoginInterface} from './login.interface';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {CustomValidator} from '../../shared/validator/custom-validator.service';
import {ToasterService} from 'angular2-toaster';

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
                private _toasterService: ToasterService) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, CustomValidator.mailFormat]),
            password: new FormControl('', [Validators.required,Validators.minLength(4)])
        });
    }

    login(model: LoginInterface, isValid: boolean){

        //this._loadingService.startLoading();
        if(!isValid) return;
        
        this._loginService.postLogin(model)
            .subscribe( (data: any) => {
                console.log(data);
                this._toasterService.pop('success', 'Login', data.success);
                //this._loadingService.stopLoading();
                //this._loginService.setAuthUserData(data);
                //this._router.navigate(['/stores/'+ data.user[0].stores[0].id +'/home']);
            },
            error => {
                console.log(error);
                this._toasterService.pop('error', 'Login', error );
                //this._loadingService.stopLoading()
                //this._notification.error(error)
            })
    }

}