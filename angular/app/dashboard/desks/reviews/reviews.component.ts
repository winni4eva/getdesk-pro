import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../../../shared/storage/storage.service';
import {ToasterService} from 'angular2-toaster';

@Component({
    selector: 'reviews',
    templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

    constructor(private _router: Router,
                private _storage: StorageService,
                private _toasterService: ToasterService) {}

    ngOnInit() {}

}