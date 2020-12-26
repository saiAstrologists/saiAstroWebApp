import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../../shared/service/restApi/rest.service';
import { RestUrl } from '../../shared/constant/rest-url.constants';
import { ProfileUpdateService } from 'src/app/shared/service/restApi/profileUpdate.service';

@Injectable({
  providedIn: 'root'
})

export class ReportService {

  constructor(private restService: RestService, private _profileUpdateService : ProfileUpdateService) {}


  submitReport(data): Observable<any> {
    return this.restService.create(RestUrl.submitReport,data)
  }



}
