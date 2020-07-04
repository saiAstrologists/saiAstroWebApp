import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegexConstant } from '../shared/constant/regex-constant'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  otpForm: FormGroup;
  isVisible:boolean = false;



  constructor(private _formBuilder: FormBuilder,public dialogRef: MatDialogRef<LoginComponent>,
   ) { }

  ngOnInit(): void {
    this.validateForm = this._formBuilder.group({
      mobile   : ['', [Validators.required, this.mobileNumber]],
      password: ['', Validators.required],
      type: [null, Validators.required]

    });

    this.otpForm = this._formBuilder.group({
      otp : ['']
     });

  }

  submitForm(value: any){
    for (const key in this.validateForm.controls) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
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
  alert("OTP Submited Successfuly")
  this.dialogRef.close(value);
}

signUpSubmitForm(value: any){
  alert("Registered Successfuly")
  this.dialogRef.close(value);
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
