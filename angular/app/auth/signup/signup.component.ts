import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {SignupInterface} from './signup.interface';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {CustomValidator} from '../../shared/validator/custom-validator.service';

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

    private _options = {
        position: ["top", "right"],
        timeOut: 9000,
        lastOnBottom: true
    }

    constructor(
                private _loginService: AuthService,
                private _router: Router) {
    }

    ngOnInit() {
        this.signupForm = new FormGroup({
            email: new FormControl('', [Validators.required, CustomValidator.mailFormat]),
            password: new FormControl('', [Validators.required,Validators.minLength(4)]),
            password_confirmation: new FormControl('', [Validators.required,Validators.minLength(4)])
        });
    }

    signup(model: SignupInterface, isValid: boolean){
        if(!isValid) return;
        
        this._loginService.postLogin(model)
            .subscribe( (data: any) => {
                console.log('signup succeeded..');
                //this._router.navigate(['/stores/'+ data.user[0].stores[0].id +'/home']);
            },
            error => {
                console.log('signup in failed..');
            })
    }

}