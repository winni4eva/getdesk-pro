import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend, Http } from '@angular/http';

import { AppComponent } from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {AuthService} from './auth/auth.service';
import {StorageService} from './shared/storage/storage.service';
import {DashboardService} from './dashboard/dashboard.service';
//import {NotificationService} from './shared/notification/notification.service';
import {routing} from './app.routes';

import {HttpInterceptor} from './shared/http-interceptor/http-interceptor.service';
import {HttpInterceptorEvent} from './shared/http-interceptor/http-interceptor.event';
//import {SimpleNotificationsModule,NotificationsService,PushNotificationsModule} from 'angular2-notifications';
import {ToasterModule, ToasterService, ToasterContainerComponent} from 'angular2-toaster';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, SignupComponent, HeaderComponent,
    FooterComponent, HomeComponent, DashboardComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule,
    ToasterModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [
    HttpInterceptorEvent,
    AuthService, StorageService, ToasterService, DashboardService,

    // ProgressTabsNavigateEvent,
    // { provide: RequestOptions, useClass: MyRequestOptions },
    { provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, HttpInterceptorEvent]
    },

    {
      provide: HttpInterceptor,
      useFactory: httpFactory,
      deps: [ XHRBackend, RequestOptions, HttpInterceptorEvent]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions, HttpInterceptorEvent:  HttpInterceptorEvent) {
  return new HttpInterceptor(backend, defaultOptions, HttpInterceptorEvent);
}
