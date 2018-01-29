import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { auth_routes } from './auth/auth.routes';
import {home_routes} from './home/home.routes';
import {dashboard_routes} from './dashboard/dashboard.routes';
import {display_routes} from './display/display.routes';

const appRoutes: Routes = [
    { path: '' ,  redirectTo: 'login', pathMatch: 'full' },
    ...auth_routes,
    ...home_routes,
    ...dashboard_routes,
    ...display_routes,
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes,{useHash: true});