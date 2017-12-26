import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../../../shared/storage/storage.service';
import {ToasterService} from 'angular2-toaster';

@Component({
    selector: 'view',
    templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {

    constructor(private _router: Router,
                private _storage: StorageService,
                private _toasterService: ToasterService) {}

    ngOnInit() {}

}