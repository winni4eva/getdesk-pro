import {Routes} from "@angular/router";

import {DisplayComponent} from './display.component';

export const display_routes: Routes = [
    {
        path: 'desk-details/:id',
        component: DisplayComponent
    }
];
