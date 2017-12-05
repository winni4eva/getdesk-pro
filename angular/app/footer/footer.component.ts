import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'dash-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    constructor(private _router: Router) {}

    ngOnInit() {}

}