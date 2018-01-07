import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    title: string = 'My first AGM project';
    lat: number = 51.678418;
    lng: number = 7.809007;
    
    constructor(private _router: Router) {}

    ngOnInit() {}

}