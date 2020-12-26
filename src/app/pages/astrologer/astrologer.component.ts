import { Component, OnInit, ViewChild } from '@angular/core';
import { ObservableDataService } from 'src/app/observables/behaviourSubject.service';
import { Router } from '@angular/router';
import { AstrologerService } from './astrologer.service';
import { CommonService } from 'src/app/shared/service/commonService/common.service';
import { AuthService } from 'src/app/auth/auth.service';
import { MatDialog } from '../../../../node_modules/@angular/material/dialog';
import { ConfirmationComponent } from '../../confirmation/confirmation.component';
import {MatAccordion} from '@angular/material/expansion';
@Component({
  selector: 'app-astrologer',
  templateUrl: './astrologer.component.html',
  styleUrls: ['./astrologer.component.scss']
})
export class AstrologerComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  ReportBtnFlag : boolean = false;
  ChatBtnFlag : boolean = false;
  CallBtnFlag : boolean = false;
  QAndAFlag : boolean = false;
  astroListing = [];
  expertise = ['Vedic Astrology','Nadi Astrology','Gemology','Nummerology','Vastu','Fengshui','KP Astrology','Prashna Kundali'];
  languages = ['Bangla','English','Gujarati','Hindi','Kannada','Marathi','Tamil','Telugu','Punjabi','Malayalam','Marwari'];
  experience = ['10','20','m20'];
  // price = ['High to low','Low to high'];
  isDetailPage : boolean = false;
  detailData;
  userData;
  countryCode;
  searchText;
  filter;
  skillArray = [];
  languageArray = [];
  expArray = [];
  expFilter;
  searchedByFilter: boolean = false;

  constructor(private _service : AstrologerService, private _authService : AuthService, private _commonService: CommonService,
    private _observableDataService : ObservableDataService,  private _route : Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem('userData'))
    this.countryCode = sessionStorage.getItem('CC')

    this._observableDataService.checkUserOperationFlag.subscribe((ObserveData) => {
        console.log("ObserveData +++++++ ", ObserveData);
        if(ObserveData != null && ObserveData == 'Report') {
          this.ReportBtnFlag = true;
          this.ChatBtnFlag = false;
          this.CallBtnFlag = false;
          this.QAndAFlag = false;

        } else if(ObserveData != null && ObserveData == 'Chat') {

          this.ChatBtnFlag = true;
          this.ReportBtnFlag = false;
          this.CallBtnFlag = false;
          this.QAndAFlag = false;


        } else if(ObserveData != null && ObserveData == 'Call') {

          this.CallBtnFlag = true;
          this.ReportBtnFlag = false;
          this.ChatBtnFlag = false;
          this.QAndAFlag = false;

        } else if(ObserveData != null && ObserveData == 'Q&A') {

          this.QAndAFlag = true;
          this.CallBtnFlag = false;
          this.ReportBtnFlag = false;
          this.ChatBtnFlag = false;

        }
         else {
          this.ChatBtnFlag = true;
          this.CallBtnFlag = true;
        }
    })
    this.getAstroListing(null);

  }


  getAstroListing(pageNo){

    let pagination = pageNo != null ? pageNo + 1 : 1;
    console.log("pagination ++", pagination);
    if(this.searchedByFilter) {
        this.filterOperation()
        this.astroListing = [];
    } else {
      this._service.getAstroListingApi({page : pagination}).subscribe((responseData)=>{

      console.log("responseData ++++++++++++", responseData);
      let resonseMessage = responseData.message;
     if(responseData.status == 200){
      // this.astroData = responseData.data
      let data = responseData.data
      if(data != null && data.length) {
          data.map((element)=>{
            console.log("element is ", element.price?.call)
              let obj = {
                contactNo : element.contactNo,
                countryCode : element.countryCode,
                userId: element.userId,
                email : element.email,
                name : element.name,
                userType : element.userType,
                experience : element.astrologistDetails.experience,
                language : element.astrologistDetails.language,
                profilePic : element.astrologistDetails.profilePic,
                skills: element.astrologistDetails.skills,
                id : element._id,
                call: element.price != null ? element.price.call : null,
                chat: element.price != null ? element.price.chat : null,
                report: element.price != null ? element.price.report : null,
                questionAnswer: element.price != null ? element.price.qa : null,
                shortBio : element.astrologistDetails.shortBio,
                longBio : element.astrologistDetails.longBio,
                firebaseUserId: element.firebaseUserId,
                activeStatus: element.activeStatus
              }

              this.astroListing.push(obj)
          })
          console.log("this.astroData ++++++++++++", this.astroListing);
    } else {
      this._commonService.tostMessage("No More Astrologer Found!");
     }

     } else if(responseData.status == 300) {
      this._commonService.tostMessage(resonseMessage);
      this._authService.logOut();
     } else {
      this._commonService.tostMessage(resonseMessage);
     }
   })
    }
  }



  report(value) {
    if( this.userData != null) {
      if(this.userData.userType == 1) {
        console.log("Can question");
        this._observableDataService.passAstroDetails(value);
        this._route.navigate(['home/reportListing'])
    } else {
      this._commonService.tostMessage("Astrologer Can't make call to Astrologer!");
    }
  } else {
    this._commonService.tostMessage("Login is required!");
}
  }

  call(value) {
    console.log(" this.userData ------>> ",this.userData);
    console.log(" call value ------>> ",value);
    if( this.userData != null) {
      if(this.userData.userType == 1){
        console.log("Can make call ");
              let countryCode =  !!this.userData.countryCode ? this.userData.countryCode : '+91';
              let requestBody = {
              contactNo : countryCode + this.userData.contactNo,
              astrologerId : value.userId
              }
              console.log("call requestBody ", requestBody);

              this.openConfirmation(value, 'Call');

              this._commonService.makeCall(requestBody).subscribe((responseData)=>{
                console.log("makeCall ++++++++++++", responseData);
                let resonseMessage = responseData.message;
                this._commonService.tostMessage(resonseMessage);
            })
      } else {
        this._commonService.tostMessage("Astrologer Can't make call to Astrologer!");
      }
     } else {
      this._commonService.tostMessage("Login is required!");
    }
  }

  chat(element){
    if( this.userData != null) {
      if(this.userData.userType == 1) {
        console.log("Can chat ");

          this.openConfirmation(element, 'Chat');

          // this._observableDataService.passAstroDetails(value);
          // this._route.navigate(['home/astrologerChat'])
          // this._route.navigate(['/chat']);
        } else {
          this._commonService.tostMessage("Astrologer Can't make call to Astrologer!");
        }
      } else {
        this._commonService.tostMessage("Login is required!");
      }
  }

  question(value){
    if( this.userData != null) {
      if(this.userData.userType == 1) {
        console.log("Can question");
          this._observableDataService.passAstroDetails(value);
          this._route.navigate(['home/questionAnswer'])
      } else {
        this._commonService.tostMessage("Astrologer Can't make call to Astrologer!");
      }
    } else {
      this._commonService.tostMessage("Login is required!");
    }
  }

  detailPage(astroData){
    console.log("astroData ----> ", astroData);
    this.detailData = astroData;
    this.isDetailPage = !this.isDetailPage;
  }

  goBack() {
    this.isDetailPage = !this.isDetailPage;
  }

  fetchBySkill(filterValue,index) {
    console.log("fetchByExpertise ",filterValue," ",index);
    this.astroListing = [];
    if(this.skillArray.length > 0){
    let checkSkill = this.skillArray.find(element => {
      return element == filterValue;
    })
    if(checkSkill && checkSkill != null){
      let indexof =  this.skillArray.indexOf(checkSkill.toString())
      this.skillArray.splice(indexof,1)
      console.log("skillArray splice is  ",this.skillArray)
      this.filterOperation();
    } else {
      this.skillArray.push(filterValue);
      console.log("skillArray is  ",this.skillArray)
      this.filterOperation();
    }
  } else {
      this.skillArray.push(filterValue);
      this.filterOperation();
    }
  }


  fetchByLanguage(filterValue,index){
    console.log("fetchByExpertise ",filterValue," ",index);
    this.astroListing = [];
    if(this.languageArray.length > 0){
      let checkSkill = this.languageArray.find((element, index) => {
       return element == filterValue;
      })
      if(checkSkill && checkSkill != null) {
        let indexof =  this.languageArray.indexOf(checkSkill.toString())
        this.languageArray.splice(indexof,1)
        this.filterOperation();
      } else {
        this.languageArray.push(filterValue);
        this.filterOperation();
      }
    } else {
      this.languageArray.push(filterValue);
      this.filterOperation();
    }
  }


  fetchByExperience(filterValue,index){
    console.log("fetchByExpertise ",filterValue," ",index);
    this.astroListing = [];
    if(this.expArray.length > 0) {
      let checkSkill = this.expArray.find((element, index) => {
       return element == filterValue;
      })
    console.log("checkSkill ",checkSkill);

      if(checkSkill && checkSkill != null) {
        let indexof =  this.expArray.indexOf(checkSkill.toString())
        this.expArray.splice(indexof,1)
        console.log("expArray ",this.expArray);
        this.expFilter = this.expArray.length > 0 ? Math.max(...this.expArray) : '';
        console.log("expFilter 1st condition ",this.expFilter);
        this.filterOperation();
      } else {
        this.expArray.push(filterValue);
        this.expFilter = Math.max(...this.expArray);
        console.log("expFilter 2nd condition ",this.expFilter);
        this.filterOperation();
      }
    } else {
      this.expArray.push(filterValue);
      this.expFilter = Math.max(...this.expArray);
      console.log("expFilter else ",this.expFilter);

      this.filterOperation();
    }


  }

  fetchByPrice(filterValue){
    console.log("fetchByPrice ",filterValue)
  }

  filterOperation() {
    let filter = {
      "languages":this.languageArray,
      "skills":this.skillArray,
      "experience":this.expFilter ? this.expFilter : ''
    }
    if(filter.languages.length > 0 || filter.skills.length > 0 || filter.experience != ''){
      console.log("filter is  ",filter)
      // here pagination condition we have to add..................
      this.searchedByFilter = true;

      this._service.getAstroByFilterSkill(filter).subscribe((responseData)=>{
        console.log("responseData is  ",responseData)

        let resonseMessage = responseData.message;
        if(responseData.status == 200){
         // this.astroData = responseData.data
         let filterData = responseData.data
         if(filterData != null && filterData.length) {
             filterData.map((element)=>{
              //  console.log("element is ", element.price?.call)
                 let obj = {
                   contactNo : element.contactNo,
                   countryCode : element.countryCode,
                   userId: element.userId,
                   email : element.email,
                   name : element.name,
                   userType : element.userType,
                   experience : element.astrologistDetails.experience,
                   language : element.astrologistDetails.language,
                   profilePic : element.astrologistDetails.profilePic,
                   skills: element.astrologistDetails.skills,
                   id : element._id,
                   call: element.price != null ? element.price.call : null,
                   chat: element.price != null ? element.price.chat : null,
                   report: element.price != null ? element.price.report : null,
                   questionAnswer: element.price != null ? element.price.qa : null,
                   shortBio : element.astrologistDetails.shortBio,
                   longBio : element.astrologistDetails.longBio,
                   firebaseUserId: element.firebaseUserId,
                   activeStatus: element.activeStatus
                 }

                 this.astroListing.push(obj)
             })
             console.log("Filter this.astroData ++++++++++++", this.astroListing);
             } else {
                  this._commonService.tostMessage("No More Astrologer Found!");
               }
            } else if(responseData.status == 300) {
                this._commonService.tostMessage(resonseMessage);
                this._authService.logOut();
            } else {
                this._commonService.tostMessage(resonseMessage);
            }

      })
    } else {
      this.searchedByFilter = !this.searchedByFilter;
      this.getAstroListing(null)
    }
  }

//   makeCall(value){
//     this.userData = JSON.parse(sessionStorage.getItem('userData'))
//     console.log(" this.userData ------>> ",this.userData);
//     if( this.userData != null) {
//       if(this.userData.userType == 1){
//         console.log("Can make call ");

//               let requestBody = {
//               contactNo : this.userData.contactNo,
//               astrologerNo : value.contactNo
//               }

//               this._service.makeCall(requestBody).subscribe((responseData)=>{
//                 console.log("makeCall ++++++++++++", responseData);
//                 let resonseMessage = responseData.message;
//                 this._commonService.tostMessage(resonseMessage);
//             })

//       } else {
//         this._commonService.tostMessage("Astrologer Can't make call to Astrologer!");

//       }
//      } else {
//       this._commonService.tostMessage("Login is required!");
//     }


// }

openConfirmation(userData, type){
  userData.type = type;
  const dialogRef = this.dialog.open(ConfirmationComponent, {
    width: '500px',
    disableClose: false,
    data: userData
  });
  dialogRef.afterClosed().subscribe(modalResponse => {
    console.log(modalResponse, 'modal response');
    if(modalResponse){
      sessionStorage.setItem('receiverId', userData.firebaseUserId);
      sessionStorage.setItem('chatUserDetail', JSON.stringify(userData));
      this._route.navigate(['/chat']);
    }
  })
}

}
