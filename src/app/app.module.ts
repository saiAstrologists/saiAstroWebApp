import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { LoginComponent } from './login/login.component'
import { HttpIntercepterBasicAuthService } from './shared/service/http/http-intercepter-basic-auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoaderInterceptorService } from './shared/service/http/loader-interceptor.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/canActivateAuth.gaurd'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    CarouselModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [
    AuthService,
    AuthGuard,
  {provide: LocationStrategy, useClass: HashLocationStrategy},
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpIntercepterBasicAuthService,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
