import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../../shared/service/restApi/rest.service';
import { RestUrl } from '../../shared/constant/rest-url.constants';


@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private restService: RestService) {}

  getAstroApi(data): Observable<any> {
    return this.restService.create(RestUrl.getAstro,data)
  }

  makeCall(data): Observable<any> {
    return this.restService.create(RestUrl.makeCall, data)
  }


}
