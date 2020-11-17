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
// import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
// import { GoogleLoginProvider } from 'angularx-social-login';
import firebase from 'firebase/app';
import 'firebase/messaging';
import { ChatComponent } from './chat/chat.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { WalletComponent } from './wallet/wallet.component';



export const config = {
  apiKey: "AIzaSyCwcgfKu2EkT1E_2uRqf7bloO8P6PHRNO0",
  authDomain: "simpleintroslider.firebaseapp.com",
  databaseURL: "https://SimpleIntroSlider.firebaseio.com",
  projectId: "simpleintroslider",
  storageBucket: "",
  messagingSenderId: "861357045560"
};

// apiKey: "<API_KEY>",
// authDomain: "<PROJECT_ID>.firebaseapp.com",
// databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
// projectId: "<PROJECT_ID>",
// storageBucket: "<BUCKET>.appspot.com",
// messagingSenderId: "<SENDER_ID>",

firebase.initializeApp(config);
// firebase.messaging().requestPermission().then(response => {
//   console.log(response, 'response token');
// })



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    SpinnerComponent,
    ChatComponent,
    ConfirmationComponent,
    WalletComponent
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
    NgxSpinnerModule,
    // SocialLoginModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           'clientId'
    //         ),
    //       },
    //     ],
    //   } as SocialAuthServiceConfig ,
    // },
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
