import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
// import { callBackendApi } from '../../constant/rest-url.constants';
import { HttpHeaders, HttpBackend } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileUpdateService {
  constructor(private http: HttpClient, handler: HttpBackend) {
     this.http = new HttpClient(handler);
  }

  public createProfile = (route: string, body) => {
    console.log("route",route," createProfile body",body);
    return this.http.post(environment.urlAddress + route, body);
  };

}
