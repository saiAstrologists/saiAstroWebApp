import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../../shared/service/restApi/rest.service';
import { RestUrl } from '../../shared/constant/rest-url.constants';


@Injectable({
  providedIn: 'root'
})

export class AstrologerService {

  constructor(private restService: RestService) {}


  getAstroListingApi(data): Observable<any> {
    return this.restService.create(RestUrl.getAstroListingApi,data)
  }

  getAstroByFilterSkill(data): Observable<any>{
    return this.restService.create(RestUrl.getAstroByFilterSkill,data)
  }


}
