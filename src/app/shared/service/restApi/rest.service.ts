import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
// import { callBackendApi } from '../../constant/rest-url.constants';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) {}

  public create = (route: string, body) => {
    console.log("route",route,"body",body);
    return this.http.post(environment.urlAddress + route, body);
  };

  // public update = (route: string, body) => {
  //   return this.http.put(
  //     this.createCompleteRoute(route, environment.urlAddress),
  //     body
  //   );
  // };

  // public delete = (route: string) => {
  //   return this.http.delete(
  //     this.createCompleteRoute(route, environment.urlAddress)
  //   );
  // };

  // private createCompleteRoute = (route: string, envAddress: string) => {
  //   if (callBackendApi) {
  //     return `${envAddress + route}`;
  //   } else {
  //     return `${route}`;
  //   }
  // };
}
