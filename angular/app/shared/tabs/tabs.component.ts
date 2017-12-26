import {Component, OnInit, Input, Output, ContentChildren, QueryList} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../../shared/storage/storage.service';
import {ToasterService} from 'angular2-toaster';

@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {

    tabIndex: number = 0;

    active: boolean = false;

    @Input('numberOfTabs') numberOfTabs = 1;

    //@Output("sideBarColor") selectedSideBarColor: EventEmitter<any> = new EventEmitter();

    @ContentChildren(TabsComponent) tabs: QueryList<TabsComponent>;

    constructor(private _router: Router,
                private _storage: StorageService,
                private _toasterService: ToasterService) {}

    ngOnInit() {}

    ngAfterContentInit() {
        console.log(this.tabs);
        let activeTabs = this.tabs.filter((tab)=>tab.active);
        this.getTabsMetadata();

        if(activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

    private getTabsMetadata(){
        this.numberOfTabs = this.tabs.toArray().length;
        this.tabIndex = this.tabs.toArray().findIndex((tab) => tab.active)
    }

    selectTab(tab: TabsComponent){
        this.tabs.toArray().forEach(tab => tab.active = false);
        tab.active = true;
        //this.titleChange.emit(tab.title);
    }

}