import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../..//shared/service/restApi/rest.service';
import { RestUrl } from '../../shared/constant/rest-url.constants';
import { catchError } from 'rxjs/operators';
import { ProfileUpdateService } from 'src/app/shared/service/restApi/profileUpdate.service';


@Injectable({
  providedIn: 'root'
})

export class AstroReportService {

  constructor(private restService: RestService, private _profileUpdateService : ProfileUpdateService) {}

  getReportByAstroId(data): Observable<any> {
    return this.restService.create(RestUrl.getReportByAstroId, data)
  }

  replyReports(data): Observable<any> {
    return this._profileUpdateService.createFormData(RestUrl.replyReports, data)
  }

  deductQtsAnsBalance(data){
    return this.restService.create(RestUrl.deductBalance, data);
  }
  acceptReject(data){
    return this.restService.create(RestUrl.acceptRejectReq, data)
  }

}
