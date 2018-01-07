import {Routes} from "@angular/router";

import {HomeComponent} from './home.component';

export const home_routes: Routes = [
    {
        path: 'home',
        children: [
            {path: '', component: HomeComponent},
            //{path: '', component: MainComponent, outlet: 'header'}
        ]
    }
];
