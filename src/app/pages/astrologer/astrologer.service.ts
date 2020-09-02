import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../../shared/service/restApi/rest.service';
import { RestUrl } from '../../shared/constant/rest-url.constants';


@Injectable({
  providedIn: 'root'
})

export class AstrologerService {

  constructor(private restService: RestService) {}


  getAstroListingApi(): Observable<any> {
    return this.restService.get(RestUrl.getAstroListingApi)
  }



}
