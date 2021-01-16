import { Injectable } from '@angular/core';
import { RestService } from '../restApi/rest.service';
import { RestUrl } from '../../constant/rest-url.constants';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private restService: RestService) { }

  orderPlace(data){
    return this.restService.createPayment(RestUrl.placeOrder, data);
  }

  walletInfo(data){
    return this.restService.getPayment(RestUrl.walletDetail, data);
  }

  signatureVerify(data) {
    return this.restService.getPayment(RestUrl.verifySignature, data);
  }

  updateWalletInfo(data, bodyReq) {
    return this.restService.patch(RestUrl.updateWalletInfo, data, bodyReq);
  }
}
