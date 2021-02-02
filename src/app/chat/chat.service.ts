import { Injectable } from '@angular/core';
import { RestService } from '../shared/service/restApi/rest.service';
import { RestUrl } from '../shared/constant/rest-url.constants';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private restService: RestService) { }

  deductChatBalance(data){
    // return this.restService.create(RestUrl.deductBalance, data);
    return this.restService.patch(RestUrl.deductChatBalance, data, {});
  }
}
