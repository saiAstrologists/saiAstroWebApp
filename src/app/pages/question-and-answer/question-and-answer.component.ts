import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ObservableDataService } from 'src/app/observables/behaviourSubject.service';
import { CommonService } from 'src/app/shared/service/commonService/common.service';
import { RegexConstant } from 'src/app/shared/constant/regex-constant';
import { QAService } from './question-and-answer.service';
import { AuthenticationService } from 'src/app/shared/service/authentication/authentication.service';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-question-and-answer',
  templateUrl: './question-and-answer.component.html',
  styleUrls: ['./question-and-answer.component.scss']
})
export class QuestionAndAnswerComponent implements OnInit {

  constructor(private _qaService : QAService, private _authenticationService : AuthenticationService,
    private _formBuilder: FormBuilder,  private _commonService: CommonService,
    private _observableDataService : ObservableDataService) { }
  validateForm: FormGroup;
  isVisible : boolean = true;
  astroData;
  reportType;
  userData;

  ngOnInit(): void {
    this.userData = this._authenticationService.getUser();

    this.validateForm = this._formBuilder.group({
      first_name: [null , [Validators.required]],
      last_name: [null , [Validators.required]],
      contactNo: [null , [Validators.required, this.mobileNumber]],
      employed: [null , [Validators.required]],
      comment: [null , [Validators.required]]
    });

    this._observableDataService.observedAstroDetail.subscribe((ObserveData)=>{
      console.log("ObserveData astro data +++++++++", ObserveData )
      if(ObserveData != null){
        this.astroData = ObserveData;
        sessionStorage.setItem('AstroData',JSON.stringify(ObserveData));
      } else {
        this.astroData =  JSON.parse(sessionStorage.getItem('AstroData'));
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

    const formData: FormData = new FormData();
    formData.append('userId', this.userData._id );
    formData.append('astrologerId', this.astroData.id );
    formData.append('reportSubType', this.reportType );
    formData.append('firstName', value.first_name );
    formData.append('lastName', value.last_name );
    formData.append('mobileNumber', value.contactNo );
    formData.append('employment ', value.employed );
    formData.append('comment ', value.comment );

    console.log("+++++++=formData ",formData);


  this._qaService.submitReport(formData).subscribe((responseData)=>{
      console.log("responseDataa ",responseData);
      let resonseMessage = responseData.message;
      if(responseData.status == 200) {
        this._commonService.tostMessage("Question submited successfully, "+this.astroData.name+" will soon get back to you");
      } else {
        this._commonService.tostMessage(resonseMessage);
      }
  });
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
