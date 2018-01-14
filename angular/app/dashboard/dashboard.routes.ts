import {Routes} from "@angular/router";
import {DashboardComponent} from './dashboard.component';
import {LoginGuard} from '../auth/guard/guard.service';
import {DeskComponent} from './desks/desks.component';
import {NewDeskComponent} from './desks/new/new-desk.component';
import {ViewDesksComponent} from './desks/view/view-desks.component'

export const dashboard_routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {path: '', component: DeskComponent},
            {
                path: 'desks', 
                component: DeskComponent, 
                children: [
                    {path: 'new', component: NewDeskComponent},
                    {path: 'view', component: ViewDesksComponent},
                    {path: '', component: ViewDesksComponent}, 
                ]
            },
            //{path: '', component: MainComponent, outlet: 'header'}
        ],
        canActivate: [LoginGuard]
    }
];
