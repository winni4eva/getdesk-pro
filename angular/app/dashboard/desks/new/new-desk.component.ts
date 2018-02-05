import {Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl,FormArray} from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../../../shared/storage/storage.service';
import {ToasterService} from 'angular2-toaster';
import {NewDeskInterface} from './new-desk.interface';
//import {FormArray, FormGroup} from '@angular/forms/src/model';
import {DeskService} from '../desks.service';
import {FormGroupValidator} from '../../../shared/validator/formGroupValidator';

@Component({
    selector: 'app-new-desk',
    templateUrl: './new-desk.component.html'
})
export class NewDeskComponent implements OnInit {

    newDeskForm;
    addAmenityForm;
    categories: Array<any> = [];
    subCategories: Array<any> = [];
    occupants: Array<any> = [];
    amenities: Array<any> = [];
    userAmenities: Array<any> = [];
    days: Array<any> = [];
    times: Array<any> = [];
    pricingPeriods: Array<any> = [];
    previewUrl: Array<any> = [];
    images: Array<any> = [];
    location = new FormControl();
    cities: Array<any> = [];
    storedForm = {
        details: '',
        amenities: '',
        pricing: '',
        images: ''
    };
    tabClasses = {
        details: {
            'tab-pane': true,
            'active': true
        },
        amenities: {
            'tab-pane': true,
            'active': false
        },
        pricing:{
            'tab-pane': true,
            'active': false
        },
        images:{
            'tab-pane': true,
            'active': false
        }
    }

    constructor(private _router: Router,
                private _storage: StorageService,
                private _toasterService: ToasterService,
                private _fb: FormBuilder,
                private _deskService: DeskService,
                private _changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit() {
        this.newDeskForm = this._fb.group({
            details: this.initDetails(),
            amenities: this.initAmenities(),
            pricing: this.initPricing()
        });

        this.addAmenityForm = this._fb.group({
            amenity: ['', Validators.required]
        });

        this._changeDetectorRef.markForCheck();
        this.newDeskForm.controls.details.controls.city.valueChanges
                .debounceTime(400)
                .distinctUntilChanged()
                .switchMap(location => this._deskService.searchLocation(location) )
                .subscribe( 
                            response => this.cities = response.cities.predictions,
                            error => console.log(error.error)
                );

        this.getCategories();
        this.getOccupants();
        this.getDays();
        this.getTimes();
        this.getAmenities();
        this.getUserAmenities();
        this.getPricingPeriods();
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
            system_amenities: this._fb.array([]),
            user_amenities: this._fb.array([])
        });
    }

    initPricing(){
        return this._fb.group({
                periods: this._fb.array([this.initPeriod()])
            },
            {
                validator: (formGroup: FormGroup) => {
                    return FormGroupValidator.validateGroup(formGroup);
            }
        });
    }

    initPeriod(){
        return this._fb.group({
            pricing_period_id: new FormControl('', Validators.required),
            price: new FormControl('', Validators.required)
        })
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
        this.setActiveTab('amenities');
    }

    addDeskAmenities(value){
        this.storedForm.amenities = value;
        this.setActiveTab('pricing');
    }

    addDeskPricing(value, isValid){
        this.storedForm.pricing = value;
        this.setActiveTab('images');
    }

    saveDesk(){
        this._deskService.storeDeskListing(this.storedForm, this.images).subscribe(
            response => {
                this._toasterService.pop('success', 'Desk', response.success);
                this._router.navigate(["/dashboard/desks/view"]);
            },
            error => this._toasterService.pop('error', 'Desk', error)
        );
    }

    setImages(event: any){
        if(event.target.files && event.target.files[0]){
            let step=0;
            for(let file of event.target.files){
                var reader = new FileReader();
                reader.onload = (event: any)=> {
                    this.previewUrl.push({'path':event.target.result});
                }
                reader.readAsDataURL(event.target.files[step]);
                step=step+1;
            }

            for (let i = 0; i < event.srcElement.files.length; i++)
                this.images.push({name: event.srcElement.files[i].name, data: event.srcElement.files[i]})
            
        }
    }

    removeImage(index){
        this.previewUrl.splice(index, 1);
        this.images.splice(index, 1);
    }

    getUserAmenities(){
        this._deskService.getUserAmenities().subscribe(
            response => {
                this.userAmenities=response.userAmenities;
                this.setUserAmenities();
            },
            error => console.log(error)
        )
    }

    addUserAmenity(value,isValid){
        this._deskService.addUserAmenity(value).subscribe(
            response => {
                this._toasterService.pop('success', 'Amenity', response.success);
                this.getUserAmenities();
            },
            error => this._toasterService.pop('error', 'Amenity', error)
        );
    }

    getCategories(){
        this._deskService.getCategories().subscribe(
            response => this.categories=response.categories,
            error => console.log(error)
        )
    }

    getSubCategories(categoryId){
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

    getPricingPeriods(){
        this._deskService.getPricingPeriods().subscribe(
            response=>this.pricingPeriods=response.pricingPeriods,
            error=>console.log(error)
        );
    }

    getAmenities(){
        this._deskService.getAmenities().subscribe(
            response => {
                this.amenities=response.amenities;
                this.setAmenities();
            },
            error => console.log(error)
        )
    }

    setAmenities(){
        const amenitiesFormGroups = this.amenities.map(amenity=>{
            let obj={};
            obj['checked']=false;
            obj['amenity']=amenity.amenity;
            obj['id']=amenity.id;
            return this._fb.group(obj);
        });

        const amenityFormArray = this._fb.array(amenitiesFormGroups);
        this.newDeskForm.controls.amenities.setControl('system_amenities', amenityFormArray);
    }

    setUserAmenities(){
        const amenitiesFormGroups = this.userAmenities.map(amenity=>{
            let obj={};
            obj['checked']=false;
            obj['amenity']=amenity.amenity;
            obj['id']=amenity.id;
            return this._fb.group(obj);
        });

        const amenityFormArray = this._fb.array(amenitiesFormGroups);
        this.newDeskForm.controls.amenities.setControl('user_amenities', amenityFormArray);
    }

    get systemAmenities(): FormArray{
        return this.newDeskForm.controls.amenities.get('system_amenities') as FormArray;
    }

    get userAmenity(): FormArray{
        return this.newDeskForm.controls.amenities.get('user_amenities') as FormArray;
    }

    updateSystemAmenity(control){
        control.setValue({
            'checked': !control.get('checked').value,
            'amenity': control.get('amenity').value,
            'id': control.get('id').value,
        });
    }

    getValue(control){
        return control;
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

    addPricingPeriod(){
        const control = <FormArray>this.newDeskForm.controls['pricing'].controls['periods'];
        control.push(this.initPeriod());
    }

    removePricingPeriod(i: number) {
        const control = <FormArray>this.newDeskForm.controls['pricing'].controls['periods'];
        control.removeAt(i);
    }

    getTabClass(panel){
        return this.tabClasses[panel];
    }

    setActiveTab(tab){
        Object.keys(this.tabClasses).map(tabClass => {
            if(tabClass !== tab)
                this.tabClasses[tabClass].active=false
            else
                this.tabClasses[tabClass].active=true
        });
    }

}