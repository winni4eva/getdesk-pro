import { Component, OnInit, ViewEncapsulation, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { DeskService } from '../dashboard/desks/desks.service';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PropertiesComponent implements OnInit, OnChanges {

  listings: Array<any>=[];
  geoCodes: Array<any>=[];
  form;
  @Input('filter') propertiesFilter;
  @Output('geoCodes') codes: EventEmitter<any>= new EventEmitter;

  constructor(private _deskService: DeskService, private _homeService: HomeService,
    private _fb: FormBuilder) {
   }

  ngOnInit() {
    this.getProperties();
    this.form = this._fb.group({filter:['']})
    this.form.controls.filter.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(filter => this._homeService.searchListings(filter) )
      .subscribe(
        response=>{
          console.log(response)
          this.listings=response.listings;
          this.codes.emit(response.geoCodes);
        },
        error=>console.log(error)
    );
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.propertiesFilter.currentValue){
      console.log('Filtering Properties')
      this.form.controls.filter.setValue(JSON.parse(changes.propertiesFilter.currentValue))
    }
  }

  getProperties(){
    this._deskService.getListings('home').subscribe(
        response=>{
            this.listings=response.listings;
            this.geoCodes=response.geoCodes;
        },
        error=>console.log(error)
    )
  }

}
