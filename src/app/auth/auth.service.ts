import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from '../shared/service/commonService/common.service';


@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private AstrologerLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  get isLoggedIn() {
    return  this.loggedIn.asObservable();
  }
  get isAstrologerLoggedIn() {
    return  this.AstrologerLoggedIn.asObservable();
  }

  constructor(
    private _route: Router,
    private _commonService: CommonService
  ) {

  }

  checkSession(userData) {
    if( userData != null && userData.userType == 2) { // this condition is checking whether it's admin or normal user
    this.AstrologerLoggedIn.next(false);
    this.loggedIn.next(true)
    return true;
    } else {
    this.AstrologerLoggedIn.next(true);
    this.loggedIn.next(true);
      return true;
    }
  }

  checkAccess(userData) {
    if( userData != null && userData.userType == 2 ) { // this condition is checking whether it's admin or normal user
      this.AstrologerLoggedIn.next(false);
      this.loggedIn.next(true);
      return false;
    } else {
      this.AstrologerLoggedIn.next(true);
      this.loggedIn.next(true);
      return true;
    }
  }

  logOut(){
    sessionStorage.clear();
    this._route.navigate(['']);
    location.reload();
    this._commonService.tostMessage("Log Out Successfully!");
  }


}
