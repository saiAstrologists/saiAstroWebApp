import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegexConstant } from 'src/app/shared/constant/regex-constant';
import { CommonService } from 'src/app/shared/service/commonService/common.service';
import {AstroRegistartionService} from './astro-registration.service'
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
@Component({
  selector: 'app-astro-registration',
  templateUrl: './astro-registration.component.html',
  styleUrls: ['./astro-registration.component.scss']
})
export class AstroRegistrationComponent implements OnInit {

  validateForm: FormGroup;
  portalFlag: boolean = false;
  skillList: string[] = ['Vedic Astrology', 'Nadi Astrology', 'Vastu', 'Gemology'];
  languageList: string[] = ['English', 'Hindi', 'Tamil', 'Marathi', 'Punjabi'];



  constructor(private _formBuilder: FormBuilder, private _commonService: CommonService, private _astroRegistartionService : AstroRegistartionService) { }

  ngOnInit(): void {

    this.validateForm = this._formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      contactNo   : ['', [Validators.required, this.mobileNumber]],
      gender: [null, Validators.required],
      dob: [null, Validators.required],
      skill: [null, Validators.required],
      language: [null, Validators.required],
      experience: [null, [Validators.required, this.onlyDigit]],
      address: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required],
      pinCode: [null, [Validators.required, this.onlyDigit]],
      bankAccountNumber: [null, [Validators.required, this.onlyDigit]],
      accountType: [null, Validators.required],
      ifsc: [null, [Validators.required, this.onlyDigit]],
      accountHolderName: [null, Validators.required],
      panNumber: [null, Validators.required],
      adharCardNumber: [null, [Validators.required, this.onlyDigit]],
      profilePic: [null, Validators.required],
      idProof: [null, Validators.required],
      shortBio: [null],
      longBio: [null],
      portalFlag: ['0', Validators.required],
      otherWorkingSite: [null],
      monthlyEarning: [null],

    });

    // if(this.validateForm.controls['portalFlag'].value == 1 ){
    //   this.portalFlag = true;
    // } else {
    //   this.portalFlag = false;
    // }

  }



  submitForm(value: any){
    for (const key in this.validateForm.controls) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }

      console.log("submit Form ",value);
      // this._route.navigate(['/profile']);

      // this._astroRegistartionService.astroCreateProfile(value).subscribe((responseData) => {
      //   console.log("responseData login ",responseData);

      //   let resonseMessage = responseData.message;

      //   if(responseData.status == 200) {
      //     // this.isVisible = true;
      //     this._commonService.tostMessage(resonseMessage)


      //   } else {
      //     alert(resonseMessage);
      //   }
      //   })
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  otherPortalWorking(event) {
    if(event.value == 1 ){
      this.portalFlag = true;
    } else {
      this.portalFlag = false;
    }
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

  onlyDigit= (control: FormControl): {[s: string]: boolean} => {

    console.log("control.value ----->",control.value)

      if(!control.value) {
        return { required: true };
      } else if (control.value.match(RegexConstant.ONLY_DIGITS)){
        return {};
      } else {

        return { expErr: true, error: true };
      }
  }

}
