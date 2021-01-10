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
  skillList: string[] = ['Vedic Astrologe', 'Nadi', 'Vastu', 'Gemology'];
  languageList: string[] = ['English', 'Hindi', 'Tamil', 'Marathi', 'Punjabi'];
  ProfileToUpload: File = null;
  IdProofToUpload: File = null;
  userData;

  constructor(private _formBuilder: FormBuilder, private _commonService: CommonService, private _astroRegistartionService : AstroRegistartionService) { }

  ngOnInit(): void {

    this.userData = JSON.parse(sessionStorage.getItem('userData'));



    this.validateForm = this._formBuilder.group({
      name: [{value : null, disabled: true}, [Validators.required]],
      email: [{value : null, disabled: true}, [Validators.required, Validators.email]],
      contactNo   : [{value : null, disabled: true}, [Validators.required, this.mobileNumber]],
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
      // ifsc: [null, [Validators.required, this.onlyDigit]],
      ifsc: [null, [Validators.required]],
      accountHolderName: [null, Validators.required],
      panNumber: [null, Validators.required],
      // adharCardNumber: [null, [Validators.required, this.onlyDigit]],
      adharCardNumber: [null, [Validators.required]],
      profilePic: [null, Validators.required],
      idProof: [null, Validators.required],
      shortBio: [null],
      longBio: [null],
      portalFlag: ['0', Validators.required],
      otherWorkingSite: [null],
      monthlyEarning: [null],

    });

    this.validateForm.patchValue({
      name : this.userData.name,
      email : this.userData.email,
      contactNo : this.userData.contactNo
    })

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

      console.log("submit Form ",typeof value.language );
      // this._route.navigate(['/profile']);
      const formData: FormData = new FormData();
      this.ProfileToUpload = value.profilePic._files[0]
      this.IdProofToUpload = value.idProof._files[0]

      formData.append('profilePic', this.ProfileToUpload, this.ProfileToUpload.name);
      formData.append('idProof', this.IdProofToUpload, this.IdProofToUpload.name);
      formData.append('accountHolderName', value.accountHolderName );
      formData.append('accountType', value.accountType);
      formData.append('address', value.address);
      formData.append('adharCardNumber', value.adharCardNumber);
      formData.append('bankAccountNumber', value.bankAccountNumber);
      formData.append('city', value.city);
      formData.append('contactNo', this.validateForm.controls['contactNo'].value);
      formData.append('country', value.country);
      formData.append('dob', value.dob);
      formData.append('email', this.validateForm.controls['email'].value);
      formData.append('experience', value.experience);
      formData.append('gender', value.gender);
      formData.append('ifsc', value.ifsc);
      formData.append('language', JSON.stringify(value.language));
      formData.append('longBio', value.longBio);
      formData.append('monthlyEarning', value.monthlyEarning);
      formData.append('name', this.validateForm.controls['name'].value);
      formData.append('otherWorkingSite', value.otherWorkingSite);
      formData.append('panNumber', value.panNumber);
      formData.append('pinCode', value.pinCode);
      formData.append('shortBio', value.shortBio);
      formData.append('skill', value.skill);
      formData.append('state', value.state);
      formData.append('userType', this.userData.userType);


      console.log("formData+++++  ",formData);


      // formData.append('fileKey', fileToUpload, fileToUpload.name);

      this._astroRegistartionService.astroCreateProfile(formData).subscribe((responseData) => {
        console.log("responseData login ",responseData);

        let resonseMessage = responseData.message;

        if(responseData.status == 200) {
          // this.isVisible = true;
          this._commonService.tostMessage(resonseMessage)


        } else {
          alert(resonseMessage);
        }
        })
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
