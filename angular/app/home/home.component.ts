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
    
    title: string = '';
    lat: number = 5.550380568997962;
    lng: number = -0.15380859375;
    listings: Array<any> = [];
    geoCodes: Array<any> = [];
    form;
    zoom: number = 3;
    
    constructor(private _router: Router,
                private _deskService: DeskService,
                private _changeDetectorRef: ChangeDetectorRef,
                private _homeService: HomeService,
                private _fb: FormBuilder) {}

    ngOnInit() {
        this.getDesks();
        this.form = this._fb.group({
            search: [''],
            category: [''],
            sub_category: [''],
            max_price: [''],
            min_price: [''],
            location: ['']
        });

        this._changeDetectorRef.markForCheck();
        this.form.controls.search.valueChanges
                .debounceTime(400)
                .distinctUntilChanged()
                .switchMap((search) => this._homeService.searchListings(this.form.value) )
                .subscribe( 
                    response => {
                        this.listings=response.listings;
                        this.geoCodes=response.geoCodes;
                    },
                    error => console.log(error.error)
                );
    }

    getDesks(){
        this._deskService.getListings('home').subscribe(
            response=>{
                this.listings=response.listings;
                this.geoCodes=response.geoCodes;
            },
            error=>console.log(error)
        )
    }

    onLocationSelect(event){
        console.log(event)
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }

}