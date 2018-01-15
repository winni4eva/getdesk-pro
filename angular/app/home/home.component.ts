import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {DeskService} from '../dashboard/desks/desks.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    title: string = 'My first AGM project';
    lat: number = 51.678418;
    lng: number = 7.809007;
    listings: Array<any> = [];
    
    constructor(private _router: Router,
                private _deskService: DeskService) {}

    ngOnInit() {
        this.getDesks();
    }

    getDesks(){
        this._deskService.getListings('home').subscribe(
            response=>this.listings=response.listings,
            error=>console.log(error)
        )
    }

}