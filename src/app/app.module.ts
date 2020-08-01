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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent
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
    // MatSliderModule,
    // MatSidenavModule,
    // MatFormFieldModule,
    // MatSelectModule,
    // MatToolbarModule,
    // MatIconModule,

    AppRoutingModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpIntercepterBasicAuthService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
