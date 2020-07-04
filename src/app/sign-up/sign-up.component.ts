import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegexConstant } from '../shared/constant/regex-constant'

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

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.signUpValidateForm = this._formBuilder.group({
      name           : ['', Validators.required],
      email          : ['', [Validators.required, Validators.email]],
      mobile          : ['', [Validators.required, this.mobileNumber]],
      password       : ['', Validators.required],
      type          : ['', Validators.required]
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
      this.isVisible = true;
      // this._route.navigate(['/profile']);

        // this._loginServices.login(value).subscribe((responseData)=>{
        //     console.log("responseData login ",responseData);
        //     let resonseMessage = responseData.message;

        //     if(responseData.status == 200){
        //     }else {
        //         alert(resonseMessage);
        //     }

        // })
  }

  otpSubmitForm(value: any) {
    this.outputSignUpData.emit(value);
    // this.dialogRef.close(value);
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


}
