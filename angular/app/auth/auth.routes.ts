import {Routes} from "@angular/router";

import {LoginComponent} from './login/login.component';
import {SignupComponent} from "./signup/signup.component";

export const auth_routes: Routes = [
    {
        path: 'login',
        children: [
            {path: '', component: LoginComponent},
            //{path: '', component: MainComponent, outlet: 'header'}
        ]
    },
    {
        path: 'signup',
        children: [
            {path: '', component: SignupComponent},
            //{path: '', component: MainComponent, outlet: 'header'}
        ]
    }
];
