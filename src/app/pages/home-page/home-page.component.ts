import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {HomeService} from './home-page.service'
import { CommonService } from 'src/app/shared/service/commonService/common.service';
import { ObservableDataService } from '../../observables/behaviourSubject.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

  astroData = [];
  userData;
  isVisible : boolean = false;
  constructor(private _service : HomeService,private _commonService: CommonService, private _observableDataService : ObservableDataService) { }




  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem('userData'))

    this.getAstro();

    // if( this.userData != null && this.userData.userType == 1) {
    //   this._observableDataService.checkUserData.subscribe((UserData)=>{
    //     console.log("User Data ++++++++++++++ ",UserData)
    //   })
    //   this.getAstro();
    // } else {
    //   this.isVisible = false
    // }
  }

  getAstro() {
    this.isVisible = true
    this._service.getAstroApi().subscribe((responseData)=>{
        console.log("responseData ++++++++++++", responseData);
        let resonseMessage = responseData.message;
       if(responseData.status == 200){
        // this.astroData = responseData.data
        let data = responseData.data
        data.map((element)=>{
            let obj = {
              contactNo : element.contactNo,
              email : element.email,
              name : element.name,
              userType : element.userType,
              experience : element.astrologistDetails.experience,
              language : element.astrologistDetails.language[0],
              profilePic : element.astrologistDetails.profilePic
            }
            this.astroData.push(obj)
        })
        console.log("this.astroData ++++++++++++", this.astroData);

       } else {
        this._commonService.tostMessage(resonseMessage);
       }
    })
}

  makeCall(value){
    this.userData = JSON.parse(sessionStorage.getItem('userData'))
    console.log(" this.userData ------>> ",this.userData);
    if( this.userData != null) {
      if(this.userData.userType == 1){
        console.log("Can make call ");

              let requestBody = {
              contactNo : this.userData.contactNo,
              astrologerNo : value.contactNo
              }

              this._service.makeCall(requestBody).subscribe((responseData)=>{
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

}
