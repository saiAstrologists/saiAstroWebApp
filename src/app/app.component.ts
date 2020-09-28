import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component'
import {CommonService} from './shared/service/commonService/common.service'
import {Router} from '@angular/router'
import { ObservableDataService } from './observables/behaviourSubject.service';
import { ResourceLoader } from '@angular/compiler';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'saiAstroWorld';

  @ViewChild('sidenav') sidenav: MatSidenav;
  isUserLogin : boolean = false;
  checkUser;
  reason = '';
  Ip;
  isAstrologerLoggedIn$: Observable<boolean>;
  isLoggedIn$: Observable<boolean>;
  AdminLoginHideFlag
  constructor(private _commonService: CommonService, private authService: AuthService, public dialog: MatDialog, private _route : Router, private _observableDataService : ObservableDataService){}


  ngOnInit() {

      this.checkUser = JSON.parse(sessionStorage.getItem('userData'));
      this.isAstrologerLoggedIn$ = this.authService.isAstrologerLoggedIn;
      this.isLoggedIn$ = this.authService.isLoggedIn;

      console.log("checkUser ++",this.checkUser);
      if(this.checkUser != null) {
        this.isUserLogin = true;
      } else {
        this.isUserLogin = false;
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

  getIPAddress() {
    this._commonService.getIPAddress().subscribe(res=>{
      this.Ip = res.ip;
      console.log("Res is ===>>> ",this.Ip);
    });
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      if(typeof result != 'undefined' || result != null) {
        this.isUserLogin = true;
        this.checkUser = result.userData;
        sessionStorage.setItem('token',result.token);
        sessionStorage.setItem('userData',JSON.stringify(result.userData));
       let isAdminUser  = this.authService.checkAccess(this.checkUser);
       console.log("isAdminUser ",isAdminUser);
       if(!isAdminUser) {
        this._route.navigate(['dashboard']);
       }

        // this._observableDataService.checkUser(result.userData);
      }
    });
  }

  viewReport(){
    console.log("this.checkUser ", this.checkUser);

    if(this.checkUser != null) {
      console.log("view report");
      this._observableDataService.checkUserOperation('Report');
      this._route.navigate(['home/astrologer']);
    } else {
    this._commonService.tostMessage("Please Login to ask report to Astrologers!")
    }
  }

  viewQA(){
    if(this.checkUser != null) {
      console.log("QA report");
      this._observableDataService.checkUserOperation('Q&A');
      this._route.navigate(['home/astrologer']);
    } else {
    this._commonService.tostMessage("Please Login to ask question to Astrologers!")
    }
  }

  talkToAstro(){
    if(this.checkUser != null) {
      console.log("QA report");
      this._observableDataService.checkUserOperation('Call');
      this._route.navigate(['home/astrologer']);
    } else {
    this._commonService.tostMessage("Please Login to talk with Astrologers!")
    }
  }

  chatToAstro(){
    if(this.checkUser != null) {
      console.log("QA report");
      this._observableDataService.checkUserOperation('Chat');
      this._route.navigate(['home/astrologer']);
    } else {
    this._commonService.tostMessage("Please Login to chat with Astrologers!")
    }
  }


  logOut(){
    this.authService.logOut();
  }
}
