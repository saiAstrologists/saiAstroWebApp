import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AstroReportService } from './astro-report.service'
import { AuthenticationService } from 'src/app/shared/service/authentication/authentication.service';
import { CommonService } from 'src/app/shared/service/commonService/common.service';
import { AuthService } from 'src/app/auth/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '../../../../node_modules/@angular/material/dialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

export interface UserData {
  _id: string;
  srNo: string;
  astrologerId: string;
  comment: string;
  createdAt: string;
  employment: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  reportSubType: string;
  reportType: number;
  userId: string;
}


@Component({
  selector: 'app-astro-report',
  templateUrl: './astro-report.component.html',
  styleUrls: ['./astro-report.component.scss']
})
export class AstroReportComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['edit','srNo', 'reportSubType', 'firstName', 'mobileNumber', 'actions'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('reportSideNav') sidenav: MatSidenav;

  mode = new FormControl('over');
  userData;
  validateForm: FormGroup;
  selectedUser;
  users: UserData[];

  characters = 0;
  wordCount: any;

  @ViewChild("text") text: ElementRef;
  words: any;
  statusTypeList: any = [];


  constructor(private _authService : AuthService, private _commonService: CommonService, private _astroReportService : AstroReportService, private _authenticationService : AuthenticationService, private _formBuilder: FormBuilder, private _dialog: MatDialog) {
    this.statusTypeList = [
      {
       id: 1,
       name: 'Accept'
      },
      {
        id: 2,
        name: 'Reject'
      }
 
     ]
  }

  ngOnInit(): void {

    this.validateForm = this._formBuilder.group({
      firstName: [{value : null, disabled: true}, [Validators.required]],
      lastName: [{value : null, disabled: true}, [Validators.required]],
      comment: [{value : null, disabled: true}, [Validators.required, Validators.email]],
      mobileNumber   : [{value : null, disabled: true}, [Validators.required]],
      reportSubType: [{value : null, disabled: true}, [Validators.required]],
      employment: [{value : null, disabled: true}, [Validators.required]],
      message: [null, [Validators.required]],
      // attachment: [null, [Validators.required]]
    });

    this.dataSource = new MatTableDataSource(this.users);
    this.userData = this._authenticationService.getUser();
    this.getReportByAstrologer();
  }

  wordCounter() {
    //alert(this.text.nativeElement.value)
    this.wordCount = this.text ? this.text.nativeElement.value.split(/\s+/) : 0;
    this.words = this.wordCount ? this.wordCount.length : 0;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getReportByAstrologer() {

    if(this.userData != null) {
      let reqBody = {
        "astrologerId" : this.userData._id
      }
      this._astroReportService.getReportByAstroId(reqBody).subscribe((responseData)=>{
        console.log("getQuestionByAstroId ResponseBody ",responseData);
        let resonseMessage = responseData.message;
        let responseBody = responseData.data;
        if(responseData.status == 200) {
          let obj = []
           responseBody.map((everyData) => {
            obj.push({
              _id : everyData._id,
              astrologerId: everyData.astrologerId,
              comment: everyData.comment,
              createdAt: everyData.createdAt,
              employment: everyData.employment,
              firstName: everyData.firstName,
              lastName: everyData.lastName,
              mobileNumber: everyData.mobileNumber,
              reportSubType: everyData.reportSubType,
              reportType: everyData.reportType,
              userId: everyData.userId,
              isAnswered: everyData.isAnswered
            });
            this.users = obj;
          })
          console.log("this.users ",this.users)
          this.dataSource = new MatTableDataSource(this.users);
          this.ngAfterViewInit();
          this._commonService.tostMessage(resonseMessage)
        } else if(responseData.status == 300){
          this._commonService.tostMessage(resonseMessage);
          this._authService.logOut();
        } else{
          this._commonService.tostMessage(resonseMessage);
        }
      })
    } else {
      alert("Astro login required")
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editQuestion(reference,data) {
    reference.toggle();
    console.log("Side bar data", data);
    this.validateForm.patchValue({
      firstName :  data.firstName,
      lastName :  data.lastName,
      comment :  data.comment,
      mobileNumber : data.mobileNumber,
      // gender :  data.gender,
      reportSubType : data.reportSubType,
      employment :  data.employment
    });
    this.selectedUser = data;
  }

  submitForm(value: any) {
    for (const key in this.validateForm.controls) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
      console.log("submit Form ",value);
      console.log("this.selectedUser ",this.selectedUser);

      const formData: FormData = new FormData();
      formData.append('message', value['message'] );
      // formData.append('attachment', value['attachment']);
      formData.append('userId', this.selectedUser.userId );
      formData.append('astrologerId', this.selectedUser.astrologerId);
      formData.append('queryId', this.selectedUser._id);
      formData.append('reportType', this.selectedUser.reportType);

      this._astroReportService.replyReports(formData).subscribe( async (responseData)=>{
        console.log("responseDataa ",responseData);
        let resonseMessage = responseData.message;
        if(responseData.status == 200) {
          this._commonService.tostMessage(resonseMessage);
          let userData = JSON.parse(sessionStorage.getItem('userData'));
          let acceptRejectRequest = {
              "userId": userData.userId,
              "queryId": this.selectedUser._id,
	            "isRequestAccpted": 'true'
          }
          let acceptRejectRes = await this.acceptReject(acceptRejectRequest);
          if(acceptRejectRes) {
            this.deductions();
          }

          this.validateForm.reset();
          this.sidenav.close();
        } else if(responseData.status == 300){
          this._commonService.tostMessage(resonseMessage);
          this._authService.logOut();
        } else{
          this._commonService.tostMessage(resonseMessage);
        }
    });
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.controls['message'].reset();
    // this.validateForm.controls['attachment'].reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  count(value){
    this.characters = 0 + value.length;
  }

  closeDrawer(reference){
    reference.toggle();
    this.validateForm.reset();
  }

  statusChange(statusEvent, rowData){
    if(statusEvent && statusEvent.value == 'Accept'){
      this.selectedUser = rowData;
      this.sidenav.toggle();
    }else if(statusEvent && statusEvent.value == 'Reject') {
      const dialogRef = this._dialog.open(ConfirmationModalComponent, {
        width: '400px',
      });
      dialogRef.afterClosed().subscribe(modalResponse => {
        if(modalResponse == 'Y') {
          let userData = JSON.parse(sessionStorage.getItem('userData'));
          let acceptRejectRequest = {
              "userId": userData.userId,
              "queryId": rowData._id,
	            "isRequestAccpted": 'false'
          }
          this.acceptReject(acceptRejectRequest).then(response => {
            console.log(response, 'response');
            
          })
        }else {
          statusEvent.source.writeValue(null);
        }
      })
    }
  }


  deductions(){
    let promise = new Promise((resolve) => {
      let req = {
        "type": 'report',
        "userId":  this.selectedUser.userId,
        "astrologerId": this.selectedUser.astrologerId   
      }
      this._astroReportService.deductQtsAnsBalance(req).subscribe(response => {
        return resolve(response);
      })
    });

    return promise;
  }

  acceptReject(reqData){
    let promise = new Promise((resolve) => {      
      this._astroReportService.acceptReject(reqData).subscribe(response => {
        return resolve(response);
      })
    });

    return promise;
  }

}
