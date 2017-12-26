import {Component, OnInit, Input, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../../../shared/storage/storage.service';
import {ToasterService} from 'angular2-toaster';

@Component({
    selector: 'tabs-header',
    templateUrl: './tabs-header.component.html'
})
export class TabsHeaderComponent implements OnInit {

    @Input('tabName') tabName = "tab";

    //@Output("sideBarColor") selectedSideBarColor: EventEmitter<any> = new EventEmitter();

    constructor(private _router: Router,
                private _storage: StorageService,
                private _toasterService: ToasterService) {}

    ngOnInit() {}

}