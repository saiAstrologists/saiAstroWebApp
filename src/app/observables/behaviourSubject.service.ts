import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObservableDataService {

  private messageSource = new BehaviorSubject<any>(null);
  checkUserData = this.messageSource.asObservable();

  constructor() { }

  checkUser(message: any) {
    this.messageSource.next(message)
  }

}
