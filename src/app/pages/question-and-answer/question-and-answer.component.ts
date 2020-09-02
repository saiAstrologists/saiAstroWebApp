import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ObservableDataService } from 'src/app/observables/behaviourSubject.service';
import { CommonService } from 'src/app/shared/service/commonService/common.service';
import { RegexConstant } from 'src/app/shared/constant/regex-constant';


@Component({
  selector: 'app-question-and-answer',
  templateUrl: './question-and-answer.component.html',
  styleUrls: ['./question-and-answer.component.scss']
})
export class QuestionAndAnswerComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,  private _commonService: CommonService, private _observableDataService : ObservableDataService) { }
  validateForm: FormGroup;
  isVisible : boolean = true;
  astroName;
  reportType;

  ngOnInit(): void {

    this.validateForm = this._formBuilder.group({
      name: [null , [Validators.required]],
      last_name: [null , [Validators.required]],
      contactNo: [null , [Validators.required, this.mobileNumber]],
      employed: [null , [Validators.required]],
      comment: [null , [Validators.required]]
    });

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


  questionAndAnswerForm(reportName) {
    this.reportType = reportName;
    this.isVisible = !this.isVisible;
  }

  submitForm(value){


    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }

      this._commonService.tostMessage("Question submited successfully, "+this.astroName+" will soon get back to you");

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
