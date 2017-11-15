import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    constructor(private _router: Router) {}

    ngOnInit() {}

}