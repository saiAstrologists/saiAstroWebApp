import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component'
import {CommonService} from './shared/service/commonService/common.service'
import {Router} from '@angular/router'
import { ObservableDataService } from './observables/behaviourSubject.service';
import { ResourceLoader } from '@angular/compiler';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { RestService } from './shared/service/restApi/rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'saiAstroWorld';
  chatList: any = [];
  userList: any  = [];
  messaging: FormGroup;
  receiverId: any;
  senderId: any;
  userBaseLogoPath: string = '';

  @ViewChild('sidenav') sidenav: MatSidenav;
  isUserLogin : boolean = false;
  checkUser;
  reason = '';
  countryCode;
  isAstrologerLoggedIn$: Observable<boolean>;
  isLoggedIn$: Observable<boolean>;
  AdminLoginHideFlag
  constructor(private _commonService: CommonService, private _restService : RestService, private authService: AuthService, public dialog: MatDialog,
     private _route : Router, private _observableDataService : ObservableDataService){
    this.messaging = new FormGroup({
      typing: new FormControl('')
    })



    // this.eventListener();

    // if(sender && receiver){
    //   firebase.database().ref().child('Chats').child(convId).limitToLast(1).on('child_added', (snapShot) => {
    //     console.log(snapShot.val(), 'added');
    //     this.chatList.push(snapShot.val());
    //   })
    // }

    // child added for first time
    // firebase.database().ref().child('Chats').limitToLast(1).on('child_added', snapShot => {
    //   let sender = this.senderId;
    //   let receiver = this.receiverId;
    //   let convId ;
    //   if(sender >  receiver) {
    //     convId = receiver + '-' + sender;
    //   }else {
    //     convId = sender + '-' + receiver;
    //   }
    //   if(snapShot.key == convId){
    //     let value = Object.values(snapShot.val())[Object.values(snapShot.val()).length - 1];
    //     this.chatList.push(value);
    //   }
    // })

    // firebase.database().ref().child('Chats').limitToLast(1).on('child_changed', snapShot => {
    //   console.log(snapShot.val(), 'valkjkukjk');
    //   if(snapShot.key){
    //     let value = Object.values(snapShot.val())[Object.values(snapShot.val()).length - 1];
    //     this.chatList.push(value);
    //   }
    // })


  }


  ngOnInit() {

      this.checkUser = JSON.parse(sessionStorage.getItem('userData'));
      this.isAstrologerLoggedIn$ = this.authService.isAstrologerLoggedIn;
      this.isLoggedIn$ = this.authService.isLoggedIn;

      if(this.checkUser && this.checkUser.userType == 1){
        this.userBaseLogoPath = '../assets/images/logo/SVG/yellow-logo.svg';
      }else if(this.checkUser && this.checkUser.userType == 2){
        this.userBaseLogoPath = '../assets/images/logo/SVG/orange-logo.svg';
      }else {
        this.userBaseLogoPath = '../assets/images/logo/SVG/yellow-logo.svg';
      }

      console.log("checkUser ++",this.checkUser);
      if(this.checkUser != null) {
        this.isUserLogin = true;
      } else {
        this.isUserLogin = false;
        this.home()
      }
      console.log("this.isUserLogin ++++ ",this.isUserLogin);

      this.isAstrologerLoggedIn$.subscribe(res=>{
        if(res) {
          this.AdminLoginHideFlag = true;
        } else {
          this.AdminLoginHideFlag = false;
        }
      });

      this.getIPAddress();
  }

  dashboard(){
    this._route.navigate(['dashboard']);
  }

  home(){
    this._route.navigate(['home']);
  }

  wallet(){
    this._route.navigate(['wallet']);
  }

  getIPAddress() {
    this._commonService.getIPAddress().subscribe(res=>{
      this.countryCode = res.countryCode;
      console.log("Res is ===>>> ",res);
      sessionStorage.setItem("CC",this.countryCode);
      // if(this.countryCode != null){
      //   console.log("Will send countrycode once get !")
      // }
    });
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      if(typeof result != undefined && result != null && result != '') {
        this.isUserLogin = true;
        this.checkUser = result.userData;
        sessionStorage.setItem('token',result.token);
        sessionStorage.setItem('userData',JSON.stringify(result.userData));
        let isAdminUser  = this.authService.checkAccess(this.checkUser);
       console.log("isAdminUser ",isAdminUser);
       if(!result.profileUpdated && typeof result.profileUpdated != 'undefined') {
        this._route.navigate(['home/astroRegistration']);
        this.userBaseLogoPath = '../assets/images/logo/SVG/orange-logo.svg';
       } else if(!isAdminUser){
         this._route.navigate(['dashboard']);
         this.userBaseLogoPath = '../assets/images/logo/SVG/orange-logo.svg';
       } else {
         console.log("else condition !!!!!");
         this.home();
         this.userBaseLogoPath = '../assets/images/logo/SVG/yellow-logo.svg';
       }
      }
    });
  }

  viewReport(){
    console.log("this.checkUser ", this.checkUser);

    // if(this.checkUser != null) {
      console.log("view report");
      this._observableDataService.checkUserOperation('Report');
      this._route.navigate(['home/astrologer']);
    // } else {
    // this._commonService.tostMessage("Please Login to ask report to Astrologers!")
    // }
  }

  viewQA(){
    // if(this.checkUser != null) {
      console.log("QA report");
      this._observableDataService.checkUserOperation('Q&A');
      this._route.navigate(['home/astrologer']);
    // } else {
    // this._commonService.tostMessage("Please Login to ask question to Astrologers!")
    // }
  }

  talkToAstro(){
    // if(this.checkUser != null) {
      console.log("talkToAstro");
      this._observableDataService.checkUserOperation('Call');
      this._route.navigate(['home/astrologer']);
    // } else {
    // this._commonService.tostMessage("Please Login to talk with Astrologers!")
    // }
  }

  chatToAstro(){
    // if(this.checkUser != null) {
      console.log("chatToAstro");
      this._observableDataService.checkUserOperation('Chat');
      this._route.navigate(['home/astrologer']);
    // } else {
    // this._commonService.tostMessage("Please Login to chat with Astrologers!")
    // }
  }

  viewHoroscope(){
    this._route.navigate(['home']);
    this.sidenav.close();
  }

  viewBlog(){
    this._route.navigate(['blog']);
    this.sidenav.close();
  }


  viewTransaction(){
    this._route.navigate(['/transaction']);
    this.sidenav.close();
  }


  logOut(){
    this.authService.logOut();
  }


  // firebase remove afterwards
  signupFirebase(){
    firebase.auth().createUserWithEmailAndPassword('amit.wohlig@gmail.com', 'Test@123').then((response)=> {
      if(response){
        console.log(response, 'signup response');

        let userData = {
          id: response.user.uid,
          imageURL: '',
          status: '',
          username: 'Amit Verma'
        }

        console.log(response.user.uid, 'local id');
        firebase.database().ref().child('Users').child(response.user.uid).set(userData);
      }
    })
  }

  signupWithOther(){
    firebase.auth().createUserWithEmailAndPassword('amitverma@gmail.com', 'Test@123').then((response)=> {
      if(response){
        console.log(response, 'signup response');

        let userData = {
          id: response.user.uid,
          imageURL: '',
          status: '',
          username: 'Amit Verma'
        }

        console.log(response.user.uid, 'local id');
        firebase.database().ref().child('Users').child(response.user.uid).set(userData);
      }
    })
  }
  loginFirebase(){
    firebase.auth().signInWithEmailAndPassword('amit.wohlig@gmail.com', 'Test@123').then((response) => {
      console.log(response, 'login response');
      this.senderId = response.user.uid;
    })
  }

  loginOtherFirebase(){
    firebase.auth().signInWithEmailAndPassword('amitverma@gmail.com', 'Test@123').then((response) => {
      console.log(response, 'login response');
      this.senderId = response.user.uid;
    })
  }

  // sendMessage(){

  // }

  getUserList(){
    firebase.database().ref('Users').on('value', snapshot => {
      let snapvalue = snapshot.val();
      if(snapvalue){
        Object.values(snapvalue).forEach(list => {
          if(list){
            this.userList.push(list);
          }
        });
      }
    })
  }

  getAllMessage(){
    console.log(firebase);
    // firebase.database().ref('Chats').orderByChild('sender').equalTo("mpksRVLonrQVNPWZZWJ0z2KsLWl2").on('value', (snapShot)=> {
    //   let snapVal = snapShot.val();
    //   if(snapVal){
    //       Object.values(snapVal).forEach(list => {
    //         if(list['receiver'] == 'W6qE30aqEWb6OzHcWGoxg52U0F53'){
    //           this.chatList.push(list);
    //         }
    //     });
    //   }

    // });

    let sender = this.senderId || 'W6qE30aqEWb6OzHcWGoxg52U0F53';
    let receiver = this.receiverId || 'mpksRVLonrQVNPWZZWJ0z2KsLWl2';
    let convId ;
    if(sender >  receiver) {
      convId = receiver + '-' + sender;
    }else {
      convId = sender + '-' + receiver;
    }
    firebase.database().ref('Chats').child(convId).once('value', (snapShot) => {
      console.log(snapShot.val(), 'value');
      Object.values(snapShot.val()).forEach(list => this.chatList.push(list));
    })
  }

  sendMessage(){
    let sender = this.senderId || 'W6qE30aqEWb6OzHcWGoxg52U0F53';
    let receiver = this.receiverId || 'mpksRVLonrQVNPWZZWJ0z2KsLWl2';
    let convId ;
    if(sender >  receiver) {
      convId = receiver + '-' + sender;
    }else {
      convId = sender + '-' + receiver;
    }
    let reqObj = {
      sender: 'W6qE30aqEWb6OzHcWGoxg52U0F53',
      receiver: 'mpksRVLonrQVNPWZZWJ0z2KsLWl2',
      isseen: false,
      message: this.messaging.value.typing,
    }
    let key = firebase.database().ref().child('Chats').push().key;
    firebase.database().ref().child('Chats').child(convId).child(key).set(reqObj).then(sendVal => {
      console.log(sendVal, 'send value');
    });

    // event listener
  }


  setReceiverId(list){
    this.receiverId = list.id
  }


  eventListener() {
    let sender = this.senderId;
    let receiver = this.receiverId;
    let convId ;
    if(sender >  receiver) {
      convId = receiver + '-' + sender;
    }else {
      convId = sender + '-' + receiver;
    }
    if(sender && receiver){
      firebase.database().ref().child('Chats').child(convId).orderByKey().limitToLast(1).on('child_added', (snapShot) => {
        console.log(snapShot.val(), 'added');
        this.chatList.push(snapShot.val());
      })
    }


    firebase.database().ref().child('Chats').on('child_added', snapShot => {
      console.log(snapShot.val(), 'valkjkukjk');
    })
  }

  logo(){
    let loginData = JSON.parse(sessionStorage.getItem('userData'));
    if(loginData && loginData['userType'] && loginData['userType'] == 2){
      this._route.navigate(['dashboard']);
    }else {
      this._route.navigate(['home']);
    }
  }
}
