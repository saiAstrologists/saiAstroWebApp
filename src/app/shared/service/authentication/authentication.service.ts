
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../restApi/rest.service';
// import { RestUrl } from '../../constant/rest-url.constants';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private http: HttpClient, private restService: RestService) { }

//   login(data) {
//     return this.restService.create(RestUrl.login, data);
//  }



  getAuthenticatedToken() {
    let token = JSON.parse(JSON.stringify(sessionStorage.getItem('token')));
    console.log("get token console ",token);
      return token
  }

  // getUserRole() {
  //   if (this.getAuthenticatedUser()) {
  //     return sessionStorage.getItem('role');
  //   }
  // }

  // isUserLoggedIn() {
  //   const user = sessionStorage.getItem('username');
  //   return !(user === null);
  // }

  // logout() {
  //   return this.restService.getData(RestUrl.logout, false);
  // }


}
