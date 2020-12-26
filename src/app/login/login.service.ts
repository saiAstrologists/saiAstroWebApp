import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../shared/service/restApi/rest.service';
import { RestUrl } from '../shared/constant/rest-url.constants';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class loginService {

  constructor(private restService: RestService) {}

  login(data): Observable<any> {
    return this.restService.create(RestUrl.login, data)
  }

  loginFirebase(data): Observable<any> {
    return this.restService.create(RestUrl.loginFirebase, data)
  }

  blogList(): Observable<any> {
    return this.restService.get(RestUrl.blogList);
  }
}
