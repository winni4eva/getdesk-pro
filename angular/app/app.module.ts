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
import {DeskComponent} from './dashboard/desks/desks.component';
import {NewDeskComponent} from './dashboard/desks/new/new-desk.component';
import {ReviewsComponent} from './dashboard/desks/reviews/reviews.component';
import {ViewComponent} from './dashboard/desks/view/view.component';
import {TabsComponent} from './shared/tabs/tabs.component';
import {TabsContentComponent} from './shared/tabs/tabs-content/tabs-content.component';
import {TabsHeaderComponent} from './shared/tabs/tabs-header/tabs-header.component';

import {AuthService} from './auth/auth.service';
import {StorageService} from './shared/storage/storage.service';
import {DashboardService} from './dashboard/dashboard.service';
import {LoginGuard} from './auth/guard/guard.service';
import {DeskService} from './dashboard/desks/desks.service';
//import {NotificationService} from './shared/notification/notification.service';
import {routing} from './app.routes';

import {HttpInterceptor} from './shared/http-interceptor/http-interceptor.service';
import {HttpInterceptorEvent} from './shared/http-interceptor/http-interceptor.event';
//import {SimpleNotificationsModule,NotificationsService,PushNotificationsModule} from 'angular2-notifications';
import {ToasterModule, ToasterService, ToasterContainerComponent} from 'angular2-toaster';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, SignupComponent, HeaderComponent,
    FooterComponent, HomeComponent, DashboardComponent, DeskComponent,
    NewDeskComponent, ReviewsComponent, ViewComponent, TabsComponent,
    TabsContentComponent, TabsHeaderComponent,
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
    LoginGuard, DeskService,

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
