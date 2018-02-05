import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {DeskService} from '../dashboard/desks/desks.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SliderComponent implements OnInit {

  userAmenities: Array<any>=[];
  categories: Array<any>=[];
  subCategories: Array<any>=[];
  deskFilterForm;
  title: string = '';
  lat: number = 5.550380568997962;
  lng: number = -0.15380859375;
  @Input("geoCodes") codes: Array<any> = [];
  form;
  zoom: number = 3;
  @Output('deskFilter') deskFilter: EventEmitter<any>= new EventEmitter;

  constructor(
            private _fb: FormBuilder, 
            private _deskService: DeskService) { }

  ngOnInit() {
    this.deskFilterForm = this._fb.group({
        keyword: [''],
        city: [''],
        status: [''],
        price_range: [''],
        categories: this._fb.array([this.initCategories()]),
        sub_categories: this._fb.array([this.initSubCategories()]),
        amenities: this._fb.array([this.initAmenities()])
    });
    this.deskFilterForm.valueChanges.subscribe(form=>{
      this.deskFilter.emit(JSON.stringify(form))
    });
    this.getCategories();
    //this.getSubCategories();
    this.getUserAmenities();
  }

  initCategories(){
    return this._fb.group({name: [''],checked: [''], id: ['']});
  }

  initSubCategories(){
    return this.initCategories();
  }

  initAmenities(){
    return this.initCategories();
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

  getCategories(){
      this._deskService.getCategories().subscribe(
          response => {
            this.categories=response.categories;
            this.setCategories();
          },
          error => console.log(error)
      )
  }

  getSubCategories(categoryId){
      this._deskService.getSubCategories(categoryId).subscribe(
          response => {
            this.subCategories=response.subCategories;
            this.setSubCategories();
          },
          error => console.log(error)
      )
  }

  setUserAmenities(){
    const amenitiesFormGroups = this.userAmenities.map(amenity=>{
        let obj={};
        obj['checked']=false;
        obj['name']=amenity.amenity;
        obj['id']=amenity.id;
        return this._fb.group(obj);
    });
    const amenityFormArray = this._fb.array(amenitiesFormGroups);
    this.deskFilterForm.setControl('amenities', amenityFormArray);
  }

  setCategories(){
    const categoriesFormGroups = this.categories.map(category=>{
        let obj={};
        obj['checked']=false;
        obj['name']=category.name;
        obj['id']=category.id;
        return this._fb.group(obj);
    });
    const categoryFormArray = this._fb.array(categoriesFormGroups);
    this.deskFilterForm.setControl('categories', categoryFormArray);
  }

  setSubCategories(){
    const subCategoriesFormGroups = this.subCategories.map(subCategory=>{
        let obj={};
        obj['checked']=false;
        obj['name']=subCategory.name;
        obj['id']=subCategory.id;
        return this._fb.group(obj);
    });
    const subCategoryFormArray = this._fb.array(subCategoriesFormGroups);
    this.deskFilterForm.setControl('sub_categories', subCategoryFormArray);
  }

  getValue(control){
    return control;
  }

  clickedMarker(label: string, index: number) {
      console.log(`clicked the marker: ${label || index}`)
  }

}
