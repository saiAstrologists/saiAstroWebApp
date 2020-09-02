import { Component, OnInit } from '@angular/core';
import { ObservableDataService } from 'src/app/observables/behaviourSubject.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/shared/service/commonService/common.service';
import { RegexConstant } from 'src/app/shared/constant/regex-constant';

@Component({
  selector: 'app-report-listing',
  templateUrl: './report-listing.component.html',
  styleUrls: ['./report-listing.component.scss']
})
export class ReportListingComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private _commonService: CommonService, private _observableDataService : ObservableDataService) { }
  validateForm: FormGroup;
  isVisible : boolean = true;
  astroName;
  reportType;
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


    this.validateForm = this._formBuilder.group({
      name: [null , [Validators.required]],
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
        sessionStorage.setItem('AstroData',ObserveData)
        this.astroName = ObserveData;
      } else {
        this.astroName =  sessionStorage.getItem('AstroData');
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
  this._commonService.tostMessage("Report submited successfully, "+this.astroName+" will soon get back to you");

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
