import {Component, OnInit} from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl,FormArray} from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../../../shared/storage/storage.service';
import {ToasterService} from 'angular2-toaster';
import {NewDeskInterface} from './new-desk.interface';
//import {FormArray, FormGroup} from '@angular/forms/src/model';
import {DeskService} from '../desks.service';
import {FormGroupValidator} from '../../../shared/validator/formGroupValidator';

@Component({
    selector: 'new-desk',
    templateUrl: './new-desk.component.html'
})
export class NewDeskComponent implements OnInit {

    newDeskForm;
    categories: Array<any> = [];
    subCategories: Array<any> = [];
    occupants: Array<any> = [];
    days: Array<any> = [];
    times: Array<any> = [];
    storedForm = {
        details: '',
        amenities: ''
    };
    tabClasses = {
        details: {
            'tab-pane': true,
            'active': true
        },
        amenities: {
            'tab-pane': true,
            'active': false
        }
    }

    constructor(private _router: Router,
                private _storage: StorageService,
                private _toasterService: ToasterService,
                private _fb: FormBuilder,
                private _deskService: DeskService) {}

    ngOnInit() {
        this.newDeskForm = new FormGroup({
            details: this.initDetails(),
            amenities: this.initAmenities(),
        });
        this.getCategories();
        this.getOccupants();
        this.getDays();
        this.getTimes();
    }

    initDetails(){
        return this._fb.group({
            name: new FormControl('', Validators.required),
            category_id: new FormControl('', Validators.required),
            sub_category_id: new FormControl('', Validators.required),
            number_of_occupants: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            opening_hours: this._fb.array([this.initOpeningHours()])
        },{
            validator: (formGroup: FormGroup) => {
                return FormGroupValidator.validateGroup(formGroup);
            }
        });
    }

    initAmenities(){
        return this._fb.group({
            name: new FormControl('', Validators.required),
            category_id: new FormControl('', Validators.required),
            sub_category_id: new FormControl('', Validators.required)
        });
    }

    initOpeningHours(){
        return this._fb.group({
            day_id: new FormControl('', Validators.required),
            opened: new FormControl(1, Validators.required),
            times_id: new FormControl('', Validators.required),
            end_time_id: new FormControl('', Validators.required)
        });
    }

    addDeskDetails(value, isValid){
        this.storedForm.details = value;
        this.tabClasses['details'].active=false;
        this.tabClasses['amenities'].active=true;
    }

    getCategories(){
        this._deskService.getCategories().subscribe(
            response => this.categories=response.categories,
            error => console.log(error)
        )
    }

    getSubCategories(categoryId){
        console.log("Fetch sub categories");
        console.log(categoryId);
        this._deskService.getSubCategories(categoryId).subscribe(
            response => this.subCategories=response.subCategories,
            error => console.log(error)
        )
    }

    getDays(){
        this._deskService.getDays().subscribe(
            response => this.days=response.days,
            error => console.log(error)
        )
    }

    getTimes(){
        this._deskService.getTimes().subscribe(
            response => this.times=response.times,
            error => console.log(error)
        )
    }

    getOccupants(){
        this.occupants=this._deskService.getOccupants();
    }

    addOpeningHour() {
        const control = <FormArray>this.newDeskForm.controls['details'].controls['opening_hours'];
        control.push(this.initOpeningHours());
    }

    removeOpeningHour(i: number) {
        const control = <FormArray>this.newDeskForm.controls['details'].controls['opening_hours'];
        control.removeAt(i);
    }

    getTabClass(panel){
        return this.tabClasses[panel];
    }

}