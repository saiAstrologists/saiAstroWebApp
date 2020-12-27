import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegexConstant } from '../shared/constant/regex-constant'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { loginService } from './login.service'
import {CommonService} from '../shared/service/commonService/common.service'
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { FirebaseService } from '../shared/service/firebase/firebase.service';
import { HttpParams } from '../../../node_modules/@angular/common/http';
// import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
// import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  otpForm: FormGroup;
  isVisible:boolean = false;
  isForgotPassVisible: boolean = false;
  // user: SocialUser;
  // loggedIn: boolean;

  constructor( private router: Router, private _commonService: CommonService, private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<LoginComponent>, private _loginService : loginService, public firebaseService: FirebaseService
   ) { }

  ngOnInit(): void {
    this.validateForm = this._formBuilder.group({
      contactNo   : ['', [Validators.required, this.mobileNumber]],
      password: ['', [Validators.required, this.passwordPattern]],
      userType: [null, Validators.required]

    });

    this.otpForm = this._formBuilder.group({
      otp : ['', Validators.required]
     });


    //  this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    // });

    // console.log("this.loggedIn ", this.loggedIn);

  }

  submitForm(value: any) {
    for (const key in this.validateForm.controls) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }

      console.log("submit Form ",value);
      // this._route.navigate(['/profile']);

      this._loginService.login(value).subscribe((responseData) => {
        console.log("responseData login ",responseData);

        let resonseMessage = responseData.message;
        let responseBody = responseData.data;

        if(responseData.status == 200) {

          // call firebase service on login
          let firebaseLoginReq = {
            email: responseBody.userData.email,
            password: responseBody.userData.contactNo,
            name: responseBody.userData.name
          }
          this.firebaseService.loginFirebase(firebaseLoginReq).then(firebaseResponse => {
            if(responseBody.userData.firebaseUserId !== firebaseResponse.id){
              let requestObj = {
                userId: responseBody.userData.userId,
                firebaseUserId: firebaseResponse.id
              }
              this._loginService.loginFirebase(requestObj).subscribe(response => {
                if(response.data && response.data.firebaseUserId){
                  console.log('firebase login successfully');
                }
              })
            }
          });
          // call firebase servicet on login end

          // this.isVisible = true;
          this._commonService.tostMessage(resonseMessage)

          if(!responseBody.profileUpdated && typeof responseBody.profileUpdated != 'undefined') {
              console.log(responseBody, 'response body');
            // this.firebaseService.loginFirebase()
            this.dialogRef.close(responseData.data);
          } else {
            this.dialogRef.close(responseData.data);

          }

        } else {
          this._commonService.tostMessage(resonseMessage);
        }

        })
  }

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // signOut(): void {
  //   this.authService.signOut();
  // }

  otpSubmitForm(value: any) {
    this.dialogRef.close(value);
  }

  forgotPassword() {
    this.isVisible = true;
  }

  resetLogin(event) {

    if(event){
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
  }
// signUpSubmitForm(value: any){
//   alert("Registered Successfuly")
//   console.log("value User ++++++++ ",value)
//   if(value) {
//     this.message = "User registered and verified Successfully"
//   } else {
//     this.message = "User not verified, please try to register again"
//   }
//   // this.dialogRef.close(value);
// }

mobileNumber= (control: FormControl): {[s: string]: boolean} => {

  console.log("control.value ----->",control.value)


  if(!control.value) {
    return { required: true };
  } else if (control.value.match(RegexConstant.ONLY_NUMBER)){
    return {};
  } else {

    return { mobileErr: true, error: true };
  }
}

passwordPattern = (control: FormControl): {[s: string]: boolean} => {
  console.log("passwordPattern ----->",control.value)

  if(!control.value) {
    return { required: true };
  }else if (control.value.match(RegexConstant.PASSWORD_REGEX)){
    return {};
  }else{
    return { passErr: true, error: true };
  }
}


}
