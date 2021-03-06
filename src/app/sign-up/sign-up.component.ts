import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegexConstant } from '../shared/constant/regex-constant';
import { signUpService } from './sign-up.service';
import {CommonService} from '../shared/service/commonService/common.service'
import { FirebaseService } from '../shared/service/firebase/firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpValidateForm: FormGroup;
  otpForm: FormGroup;
  isVisible:boolean = false;
  loginResponseData;
  message;
  countryCodeList: any = [];

  @Output()
  outputSignUpData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder, private _signUpService : signUpService, private _commonService : CommonService, public firebaseService: FirebaseService) { }

  ngOnInit(): void {

    this.getCountryCodeList();

    this.signUpValidateForm = this._formBuilder.group({
      name           : ['', [Validators.required]],
      email          : ['', [Validators.required, Validators.email]],
      countryCode    : ['', [Validators.required]],
      contactNo      : ['', [Validators.required, this.mobileNumber]],
      password       : ['', [Validators.required, this.passwordPattern]],
      userType          : ['', [Validators.required]]
    });

    this.otpForm = this._formBuilder.group({
      otp : ['',[Validators.required]]
    });

  }


  submitForm(value: any){

    // if user select apart from India , USA or Taiwan then set USA as default
    if(value && value.countryCode != '+91' || value.countryCode != '+1' || value.countryCode != '+886'){
      value.countryCode = '+1';
    }

    for (const key in this.signUpValidateForm.controls) {
        this.signUpValidateForm.controls[key].markAsDirty();
        this.signUpValidateForm.controls[key].updateValueAndValidity();
      }

      console.log("submit Form ",value);

      this._signUpService.signUp(value).subscribe((responseData) => {
        console.log("responseData login ",responseData);
        // responseData.status = 200;
        let resonseMessage = responseData.message;

        if(responseData.status == 200) {
          this.isVisible = true;

          // fire base register
          let firebaseLoginReq = {
            email: this.signUpValidateForm.value.email,
            password: this.signUpValidateForm.value.contactNo,
            name: this.signUpValidateForm.value.name
          }
          this.firebaseService.signInFirebase(firebaseLoginReq);
          // fire base register end
        } else {
          this._commonService.tostMessage(resonseMessage)
        }

        })
  }

  otpSubmitForm(value: any) {
    console.log("submit Form ",value);

    let requestData = {
      contactNo : this.signUpValidateForm.value.contactNo,
      otp : value.otp,
      userType : this.signUpValidateForm.value.userType
    }

    this._commonService.verifyOTP(requestData).subscribe((responseData) => {
      console.log("responseData login ",responseData);
      responseData.status = 200;

      let resonseMessage = responseData.message;

      if(responseData.status == 200) {
        this._commonService.tostMessage(resonseMessage)
        this.isVisible = false;
        this.message = "User registered and verified Successfully, Please Login!"
        this.signUpValidateForm.reset();
        // this.outputSignUpData.emit(true);
      } else {
        this._commonService.tostMessage(resonseMessage)
        this.message = "OTP invalid, please resend your OTP!"
        this.signUpValidateForm.reset();
        // this.outputSignUpData.emit(false);
      }

    });


    // this.dialogRef.close(value);
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

  mobileNumber = (control: FormControl): {[s: string]: boolean} => {

    console.log("control.value ----->",control.value)


    if(!control.value) {
      return { required: true };
    } else if (control.value.match(RegexConstant.ONLY_NUMBER)){
      return {};
    } else {

      return { mobileErr: true, error: true };
    }
  }

  getCountryCodeList(){
    this._signUpService.getCountry().subscribe(response => {
      console.log(response, 'response country list');
      this.countryCodeList = response;
    })
  }

}
