import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../shared/service/restApi/rest.service';
import { RestUrl } from '../shared/constant/rest-url.constants';


@Injectable({
  providedIn: 'root'
})

export class signUpService {

  constructor(private restService: RestService) {}

  signUp(data): Observable<any> {
    console.log("data in sign up", data)
    return this.restService.create(RestUrl.signUp, data)
  }

  getCountry(): Observable<any> {
    return this.restService.getJson('/assets/json/countrylist.json');
  }


}
