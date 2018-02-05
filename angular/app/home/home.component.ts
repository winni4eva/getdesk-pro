import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {DeskService} from '../dashboard/desks/desks.service';
import {HomeService} from './home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    //title: string = '';
    //lat: number = 5.550380568997962;
    //lng: number = -0.15380859375;
    geoCodes: Array<any> = [];
    form;
    //zoom: number = 3;
    deskFilter;
    
    constructor(private _homeService: HomeService,
                private _fb: FormBuilder) {}

    ngOnInit() {
        this.form = this._fb.group({
            search: [''],
            category: [''],
            sub_category: [''],
            max_price: [''],
            min_price: [''],
            location: ['']
        });
    }

    onLocationSelect(event){
        console.log(event)
    }

    // clickedMarker(label: string, index: number) {
    //     console.log(`clicked the marker: ${label || index}`)
    // }

    onDeskFilter(event){
        this.deskFilter=event;
    }

    onGeoCode(event){
        console.log(event);
        this.geoCodes=event;
    }

}