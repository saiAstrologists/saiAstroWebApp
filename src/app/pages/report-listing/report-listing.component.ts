import { Component, OnInit } from '@angular/core';
import { ObservableDataService } from 'src/app/observables/behaviourSubject.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/shared/service/commonService/common.service';
import { RegexConstant } from 'src/app/shared/constant/regex-constant';
import { AuthenticationService } from 'src/app/shared/service/authentication/authentication.service';
import { ReportService } from './report.service'
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-report-listing',
  templateUrl: './report-listing.component.html',
  styleUrls: ['./report-listing.component.scss']
})
export class ReportListingComponent implements OnInit {

  constructor(private authService: AuthService, private _reportService: ReportService,private _authenticationService : AuthenticationService ,private _formBuilder: FormBuilder, private _commonService: CommonService, private _observableDataService : ObservableDataService) { }
  validateForm: FormGroup;
  isVisible : boolean = true;
  astroData;
  reportType;
  userData;
  darkTheme: NgxMaterialTimepickerTheme = {
    container: {
        bodyBackgroundColor: '#424242',
        buttonColor: '#fff'
    },
    dial: {
        dialBackgroundColor: '#555',
    },
    clockFace: {
        clockFaceBackgroundColor: '#555',
        clockHandColor: '#f9a825',
        clockFaceTimeInactiveColor: '#fff'
    }
  };


  ngOnInit(): void {
    this.userData = this._authenticationService.getUser();
    this.validateForm = this._formBuilder.group({
      first_name: [null , [Validators.required]],
      last_name: [null , [Validators.required]],
      contactNo: [null , [Validators.required, this.mobileNumber]],
      gender: [null , [Validators.required]],
      dob: [null , [Validators.required]],
      tob: [null , [Validators.required]],
      place_of_birth_city: [null , [Validators.required]],
      place_of_birth_state: [null , [Validators.required]],
      place_of_birth_country: [null , [Validators.required]],
      martial: [null , [Validators.required]],
      employed: [null , [Validators.required]],
      language: [null , [Validators.required]],
      comment: [null , [Validators.required]],
    })

    this._observableDataService.observedAstroDetail.subscribe((ObserveData)=>{
      console.log("ObserveData astro data +++++++++", ObserveData )
      if(ObserveData != null){
        this.astroData = ObserveData;
        console.log("this.astroData +++++++++", this.astroData )

        sessionStorage.setItem('AstroData',JSON.stringify(ObserveData));
      } else {
        this.astroData =  JSON.parse(sessionStorage.getItem('AstroData'));
        console.log("this.astroData +++++++++", this.astroData )

      }
  })

}

reportForm(reportName){
  console.log("reportName  +++++++++", reportName )
  this.reportType = reportName;
  this.isVisible = !this.isVisible;
}

submitForm(value) {

  for (const key in this.validateForm.controls) {
    this.validateForm.controls[key].markAsPristine();
    this.validateForm.controls[key].updateValueAndValidity();
  }
  console.log("value ",value);

  // const formData: FormData = new FormData();
  // formData.append('userId', this.userData._id );
  // formData.append('astrologerId', this.astroData.id );
  // formData.append('reportSubType', this.reportType );
  // formData.append('firstName', value.first_name );
  // formData.append('lastName', value.last_name );
  // formData.append('mobileNumber', value.contactNo );
  // formData.append('gender', value.gender );
  // formData.append('dob', value.dob );
  // formData.append('dobTime', value.tob);
  // formData.append('city', value.place_of_birth_city );
  // formData.append('state', value.place_of_birth_state );
  // formData.append('country', value.place_of_birth_country );
  // formData.append('maritalStatus', value.martial );
  // formData.append('employment', value.employed );
  // formData.append('language', value.language );
  // formData.append('comment', value.comment);

  // console.log("+++++++=formData ",formData);

  let formValue = {
    userId : this.userData._id ,
    astrologerId : this.astroData.id,
    reportSubType : this.reportType,
    firstName : value.first_name,
    lastName : value.last_name,
    mobileNumber : value.contactNo,
    gender : value.gender,
    dob : value.dob,
    dobTime : value.tob,
    city : value.place_of_birth_city,
    state : value.place_of_birth_state,
    country : value.place_of_birth_country,
    maritalStatus : value.martial,
    employment : value.employed,
    language : value.language,
    comment : value.comment
  }


  this._reportService.submitReport(formValue).subscribe((responseData)=>{
    console.log("responseDataa ",responseData);
    let resonseMessage = responseData.message;
    if(responseData.status == 200) {

      this._commonService.tostMessage("Report submited successfully, "+this.astroData.name+" will soon get back to you");

    } else if(responseData.status == 300){
      this._commonService.tostMessage(resonseMessage);
       this.authService.logOut();
    } else {
      this._commonService.tostMessage(resonseMessage);
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

}
