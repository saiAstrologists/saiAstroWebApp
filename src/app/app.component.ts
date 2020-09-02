import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component'
import {CommonService} from './shared/service/commonService/common.service'
import {Router} from '@angular/router'
import { ObservableDataService } from './observables/behaviourSubject.service';
import { ResourceLoader } from '@angular/compiler';

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
  constructor(private _commonService: CommonService, public dialog: MatDialog, private _route : Router, private _observableDataService : ObservableDataService){}

  reason = '';

  ngOnInit() {

      this.checkUser = JSON.parse(sessionStorage.getItem('userData'));

      console.log("checkUser ++",this.checkUser);
      if(this.checkUser != null) {
        this.isUserLogin = true;
      } else {
        this.isUserLogin = false;
      }
      console.log("this.isUserLogin ++++ ",this.isUserLogin);

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
        this._observableDataService.checkUser(result.userData);
        sessionStorage.setItem('token',result.token);
        sessionStorage.setItem('userData',JSON.stringify(result.userData));
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
    sessionStorage.clear();
    this._route.navigate(['']);
    this.isUserLogin = false;
    this._commonService.tostMessage("Log Out Successfully!")

  }
}
