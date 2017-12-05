import {Routes} from "@angular/router";

import {DashboardComponent} from './dashboard.component';

export const dashboard_routes: Routes = [
    {
        path: 'dashboard',
        children: [
            {path: '', component: DashboardComponent},
            //{path: '', component: MainComponent, outlet: 'header'}
        ]
    }
];
