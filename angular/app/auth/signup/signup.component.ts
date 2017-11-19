import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {SignupInterface} from './signup.interface';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {CustomValidator} from '../../shared/validator/custom-validator.service';
import {ToasterService} from 'angular2-toaster';
//import {NotificationService} from '../../shared/notification/notification.service';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styles: [`
        body{text-align: center;}
        .errorAlert{color: red;}
    `]
})
export class SignupComponent implements OnInit {
    
    private signupForm;

    constructor(
                private _authService: AuthService,
                private _router: Router,
                private _toasterService: ToasterService
            ) {
    }

    ngOnInit() {
        this.signupForm = new FormGroup({
            first_name: new FormControl('', [Validators.required]),
            last_name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, CustomValidator.mailFormat]),
            password: new FormControl('', [Validators.required,Validators.minLength(4)]),
            password_confirmation: new FormControl('', [Validators.required,Validators.minLength(4)])
        });
               
    }

    signup(model: SignupInterface, isValid: boolean){
        if(!isValid) return;
        
        this._authService.postSignup(model)
            .subscribe( (data: any) => {
                console.log(data);
                //this._router.navigate(['/stores/'+ data.user[0].stores[0].id +'/home']);
            },
            error => {
                console.log(error);
            })
    }

    popToast() {
        //this._toasterService.pop('success', 'Args Title', 'Args Body');
        //this._toasterService.pop('error', 'Args Title', 'Args Body');
        //this._toasterService.pop('info', 'Args Title', 'Args Body');
    }

}