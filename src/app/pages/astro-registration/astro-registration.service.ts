import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestUrl } from '../../shared/constant/rest-url.constants';
import { ProfileUpdateService } from '../../shared/service/restApi/profileUpdate.service';



@Injectable({
  providedIn: 'root'
})

export class AstroRegistartionService {

  constructor( private _profileUpdateService : ProfileUpdateService) {


  }

  astroCreateProfile(data): Observable<any> {
    return this._profileUpdateService.createProfile(RestUrl.astroCreateProfile, data)
  }



}
