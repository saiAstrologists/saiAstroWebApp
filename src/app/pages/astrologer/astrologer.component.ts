import { Component, OnInit } from '@angular/core';
import { ObservableDataService } from 'src/app/observables/behaviourSubject.service';
import { Router } from '@angular/router';
import { AstrologerService } from './astrologer.service';
import { CommonService } from 'src/app/shared/service/commonService/common.service';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-astrologer',
  templateUrl: './astrologer.component.html',
  styleUrls: ['./astrologer.component.scss']
})
export class AstrologerComponent implements OnInit {

  ReportBtnFlag : boolean = false;
  ChatBtnFlag : boolean = false;
  CallBtnFlag : boolean = false;
  QAndAFlag : boolean = false;
  astroListing = [];
  isDetailPage : boolean = false;
  detailData;
  userData;
  searchText;
  filter;
  constructor(private _service : AstrologerService, private _authService : AuthService, private _commonService: CommonService, private _observableDataService : ObservableDataService,  private _route : Router) { }

  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem('userData'))

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

    this._service.getAstroListingApi({page : pagination}).subscribe((responseData)=>{

      console.log("responseData ++++++++++++", responseData);
      let resonseMessage = responseData.message;
     if(responseData.status == 200){
      // this.astroData = responseData.data
      let data = responseData.data
      if(data != null && data.length) {
          data.map((element)=>{
              let obj = {
                contactNo : element.contactNo,
                countryCode : element.countryCode,
                userId: element.userId,
                email : element.email,
                name : element.name,
                userType : element.userType,
                experience : element.astrologistDetails.experience,
                language : element.astrologistDetails.language[0],
                profilePic : element.astrologistDetails.profilePic,
                id : element._id,
                shortBio : element.astrologistDetails.shortBio,
                longBio : element.astrologistDetails.longBio
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

loadMore(data){

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
          // remove just for dummy
             sessionStorage.setItem('chatName', element.name);
          // remove just for dummy end
          // this._observableDataService.passAstroDetails(value);
          // this._route.navigate(['home/astrologerChat'])
          this._route.navigate(['/chat']);
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

  goBack(){
    this.isDetailPage = !this.isDetailPage;
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

}