import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegexConstant } from '../shared/constant/regex-constant';
import { signUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpValidateForm: FormGroup;
  otpForm: FormGroup;
  isVisible:boolean = false;

  @Output()
  outputSignUpData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder, private _signUpService : signUpService) { }

  ngOnInit(): void {

    this.signUpValidateForm = this._formBuilder.group({
      name           : ['', [Validators.required]],
      email          : ['', [Validators.required, Validators.email]],
      mobile          : ['', [Validators.required, this.mobileNumber]],
      password       : ['', [Validators.required, this.passwordPattern]],
      type          : ['', [Validators.required]]
    });


    this.otpForm = this._formBuilder.group({
      otp : ['']
    });


  }

  submitForm(value: any){
    for (const key in this.signUpValidateForm.controls) {
        this.signUpValidateForm.controls[key].markAsDirty();
        this.signUpValidateForm.controls[key].updateValueAndValidity();
      }

      console.log("submit Form ",value);

      this._signUpService.signUp(value).subscribe((responseData) => {
        console.log("responseData login ",responseData);

        let resonseMessage = responseData.message;

        if(responseData.status == 200) {
          this.isVisible = true;
        } else {
          alert(resonseMessage);
        }

        })
  }

  otpSubmitForm(value: any) {
    this.outputSignUpData.emit(value);
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



}
