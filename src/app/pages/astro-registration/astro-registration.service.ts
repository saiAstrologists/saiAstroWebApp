import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../../shared/service/restApi/rest.service';
import { RestUrl } from '../../shared/constant/rest-url.constants';



@Injectable({
  providedIn: 'root'
})

export class AstroRegistartionService {

  constructor(private restService: RestService) {}

  astroCreateProfile(data): Observable<any> {
    return this.restService.create(RestUrl.login, data)
  }

}
