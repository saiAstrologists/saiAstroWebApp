import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { RestService } from '../restApi/rest.service';
import { RestUrl } from '../../constant/rest-url.constants';


@Injectable({
  providedIn: 'root'
})

export class CommonService {

  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;

  constructor(private _snackBar: MatSnackBar,private restService: RestService) {}

  tostMessage(message) {
    this._snackBar.open(message,'close', {
      duration: 10 * 1000,
      horizontalPosition : "center",
      verticalPosition : "top"
  })
  }

  // getOTP(data){
  //   console.log("data in sign up", data)
  //   return this.restService.create(RestUrl.verifyOTP, data)
  // }

  verifyOTP(data): Observable<any> {
    console.log("data in sign up", data)
    return this.restService.create(RestUrl.verifyOTP, data)
  }

  makeCall(data): Observable<any> {
    return this.restService.create(RestUrl.makeCall, data)
  }


}
