import {Component, OnInit, Input, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../../../shared/storage/storage.service';
import {ToasterService} from 'angular2-toaster';

@Component({
    selector: 'tabs-content',
    templateUrl: './tabs-content.component.html'
})
export class TabsContentComponent implements OnInit {

    @Input('tabName') tabName = '';

    //@Output("sideBarColor") selectedSideBarColor: EventEmitter<any> = new EventEmitter();

    constructor(private _router: Router,
                private _storage: StorageService,
                private _toasterService: ToasterService) {}

    ngOnInit() {}

}