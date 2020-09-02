import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObservableDataService {

  private messageSource = new BehaviorSubject<any>(null);
  private checkOperationSource = new BehaviorSubject<any>(null);
  private astroDetail = new BehaviorSubject<any>(null);


  checkUserData = this.messageSource.asObservable();
  checkUserOperationFlag = this.checkOperationSource.asObservable();
  observedAstroDetail = this.astroDetail.asObservable();



  constructor() { }

  checkUser(message: any) {
    this.messageSource.next(message)
  }

  checkUserOperation(message: any) {
    this.checkOperationSource.next(message)
  }

  passAstroDetails(message: any) {
    this.astroDetail.next(message)
  }

}
