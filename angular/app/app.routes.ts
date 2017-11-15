import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { auth_routes } from './auth/auth.routes';

const appRoutes: Routes = [
    { path: '' ,  redirectTo: 'login', pathMatch: 'full' },
    ...auth_routes,
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);