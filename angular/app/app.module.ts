import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend, Http } from '@angular/http';

import { AppComponent } from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

import {AuthService} from './auth/auth.service';
import {StorageService} from './shared/storage/storage.service';
import {routing} from './app.routes';

import {HttpInterceptor} from './shared/http-interceptor/http-interceptor.service';
import {HttpInterceptorEvent} from './shared/http-interceptor/http-interceptor.event';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, SignupComponent, HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    routing
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [
    HttpInterceptorEvent,
    AuthService, StorageService,

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
