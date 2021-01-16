import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
// import { callBackendApi } from '../../constant/rest-url.constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private messageSource = new BehaviorSubject(null);
  checkUserData = this.messageSource.asObservable();



  constructor(private http: HttpClient ) { }

  checkUser(message: string) {
    this.messageSource.next(message)
  }


  public create = (route: string, body) => {
    console.log("route",route,"body",body);
    return this.http.post(environment.urlAddress + route, body);
  };

  public get = (route: string) => {
    console.log("**GET**", "route",route);
    return this.http.get(environment.urlAddress + route);
  };

  public getIPAddress = (route: string) => {
    console.log("**GET getIPAddress **", "route",route);
    return this.http.get(route);
  };

  public createPayment = (route: string, body) => {
    console.log("route",route,"body",body);
    return this.http.post(environment.paymentUrlAddress + route, body);
  };

  public getPayment = (route: string, headerParam: any) =>{
    return this.http.get(environment.paymentUrlAddress+ route, {params : headerParam})
  }
  public patch = (route: string, headerParam: any, body: any) =>{
    console.log(environment.paymentUrlAddress+ route, 'url');
    return this.http.patch(environment.paymentUrlAddress+ route, body, {params : headerParam})
  }

  public getByParams = (route: string, headerParam: any) =>{
    return this.http.get(environment.urlAddress+ route, {params : headerParam})
  }



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
