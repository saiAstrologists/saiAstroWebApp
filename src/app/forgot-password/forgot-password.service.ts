import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../shared/service/restApi/rest.service';
import { RestUrl } from '../shared/constant/rest-url.constants';


@Injectable({
  providedIn: 'root'
})

export class ForgotPasswordService {

  constructor(private restService: RestService) {}

  forgetPassword(data): Observable<any> {
    return this.restService.create(RestUrl.forgetPassword, data)
  }

  resetUser(data): Observable<any> {
    return this.restService.create(RestUrl.resetUser, data);
  }

}
