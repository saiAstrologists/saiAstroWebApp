import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
// import { callBackendApi } from '../../constant/rest-url.constants';
import { HttpHeaders, HttpBackend } from "@angular/common/http";
import { AuthenticationService } from '../authentication/authentication.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProfileUpdateService {
  getAuthenticatedToken;
  constructor(private http: HttpClient, handler: HttpBackend, private _authenticationService : AuthenticationService) {
     this.http = new HttpClient(handler);
     this.getAuthenticatedToken = this._authenticationService.getAuthenticatedToken()
  }

  public createProfile = (route: string, body) => {
    console.log("route",route," createProfile body",body);
    let setHeaders = new HttpHeaders({
      'Authorization':  this.getAuthenticatedToken || JSON.parse(JSON.stringify(sessionStorage.getItem('token'))),
    })
    return this.http.post(environment.urlAddress + route, body, {headers : setHeaders});
  };

  public createFormData = (route: string, body) => {
    console.log("route",route," createProfile body",body);
    let setHeaders = new HttpHeaders({
      'Authorization':  this.getAuthenticatedToken,
    })
    return this.http.post(environment.urlAddress + route, body, {headers : setHeaders})
  //   .pipe(
  //     catchError(this.handleError)
  // );
  };

  public getIPAddress = (route: string) => {
    console.log("**GET getIPAddress **", "route",route);
    let setHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    // return this.http.get(route,{headers : setHeaders});
    return this.http.get(route,{headers : setHeaders, responseType : 'json'});

  };

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
        alert("Client Side Error "+ errorMessage);
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        alert("Server Side Error "+ errorMessage);

    }
    console.log(errorMessage);
    return throwError(errorMessage);
}


}
