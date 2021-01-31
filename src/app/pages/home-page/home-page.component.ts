import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {HomeService} from './home-page.service'
import { CommonService } from 'src/app/shared/service/commonService/common.service';
import { ObservableDataService } from '../../observables/behaviourSubject.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  clientList: any[];
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
        items: 4
      }
    },
    nav: false
  }

  astroData = [];
  userData;
  isVisible : boolean = false;
  constructor(private _service : HomeService, private _route : Router, private _commonService: CommonService,
     private _observableDataService : ObservableDataService) {

      this.clientList = [
        {
          img: '/assets/images/client/disrupt.png',
          name: 'Disrupt'
        },
        {
          img: '/assets/images/client/silicon.png',
          name: 'Silicon'
        },
        {
          img: '/assets/images/client/times-india.png',
          name: 'Times India'
        },
        {
          img: '/assets/images/client/hindustan.png',
          name: 'Hindustan'
        },
        {
          img: '/assets/images/client/tedx.png',
          name: 'Tedx'
        },
        {
          img: '/assets/images/client/datingadvice.png',
          name: 'Dating Advice'
        },
        {
          img: '/assets/images/client/dating-news.png',
          name: 'Dating News'
        },
        {
          img: '/assets/images/client/youstory.png',
          name: 'Your Story'
        },
        {
          img: '/assets/images/client/e27.jpg',
          name: 'e27'
        },
        {
          img: '/assets/images/client/ani.png',
          name: 'Ani'
        },
        {
          img: '/assets/images/client/dailyhunt.png',
          name: 'dailyhunt'
        },
        {
          img: '/assets/images/client/united-news.png',
          name: 'united news of india'
        },
        {
          img: '/assets/images/client/business-stand.png',
          name: 'business standard'
        },
        {
          img: '/assets/images/client/start-up.png',
          name: 'startup'
        }
      ]

     }




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
    let data = {
      "page":1
    }
    this._service.getAstroApi(data).subscribe((responseData)=>{
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

hmViewAllAstrologer(){
  this._observableDataService.checkUserOperation('Call');
  this._route.navigate(['home/astrologer']);
}

}
