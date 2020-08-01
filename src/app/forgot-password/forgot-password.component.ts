import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegexConstant } from '../shared/constant/regex-constant';
import { ForgotPasswordService } from './forgot-password.service';
import {CommonService} from '../shared/service/commonService/common.service'
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  validateForm: FormGroup;
  resetForm: FormGroup;

  isVisible:boolean = true;
  isOtp:boolean = false;

  @Output() outputResetData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder, private _forgotPasswordService : ForgotPasswordService, private _commonService : CommonService) { }

  ngOnInit(): void {

    this.validateForm = this._formBuilder.group({
      contactNo   : ['', [Validators.required, this.mobileNumber]],
      otp: [{value:'', disabled: true}],
      userType: ['']
    });

    this.resetForm = this._formBuilder.group({
      contactNo   : [{value:'', disabled:true}, [Validators.required, this.mobileNumber]],
      userType : [{value:'', disabled:true}, [Validators.required]],
      password : ['', [Validators.required, this.passwordPattern]]
    });
  }

  submitForm(value: any){
    for (const key in this.validateForm.controls) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }

      console.log("submit Form ",value);
      this._forgotPasswordService.forgetPassword(value).subscribe((responseData) => {
        console.log("responseData login ",responseData);

        let resonseMessage = responseData.message;

        if(responseData.status == 200) {
          // this.isVisible = true;
          this.validateForm.controls['userType'].setValue(responseData.data.userType, {onlySelf:true});
          this.validateForm.controls['otp'].enable();
          this.isOtp = true;
          console.log("this.validateForm ++++++++++++",this.validateForm)


        } else {
          alert(resonseMessage);
        }

      })
  }

  verifyOTP(value) {

    console.log("verifyOTP login ",value);

    this._commonService.verifyOTP(value).subscribe((responseData)=>{
      console.log("responseData ------> ",responseData);
      let resonseMessage = responseData.message;

      if(responseData.status == 200) {
        this.isVisible = false;
        this.resetForm.controls['contactNo'].setValue(this.validateForm.value.contactNo, {onlySelf:true});
        this.resetForm.controls['userType'].setValue(this.validateForm.value.userType == 1 ? "User" : "Astrologer", {onlySelf:true});
        console.log("this.resetForm ----->",this.resetForm);

      } else {
        alert(resonseMessage);
      }
    })

  }

  resetUser(value){
    value['contactNo'] = this.resetForm.controls.contactNo.value;
    value['userType'] = this.resetForm.controls.userType.value == "User" ? '1' : '2';

    console.log("resetUser is ", value, "And", this.resetForm);
    this._forgotPasswordService.resetUser(value).subscribe((responseData)=>{
      console.log("responseData ------> ",responseData);
      let resonseMessage = responseData.message;

      if(responseData.status == 200) {
        this.validateForm.reset();
        this.resetForm.reset();
        this.outputResetData.emit(true);
      } else {
        alert(resonseMessage);
      }

    })

  }

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
