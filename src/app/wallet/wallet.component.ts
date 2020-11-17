import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../shared/service/payment/payment.service';
import { HttpParams } from '../../../node_modules/@angular/common/http';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  walletInfo: any;
  viewWallet: boolean = false;
  walletForm: FormGroup;
  constructor(public paymentService: PaymentService) {
    this.walletForm = new FormGroup({
      walletAmount: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.getWalletInfo();
  }

  getWalletInfo(){
    if(sessionStorage.getItem('userData')){
      let userData = JSON.parse(sessionStorage.getItem('userData'));

      let params = new HttpParams().set('userId', userData.userId);

      this.paymentService.walletInfo(params).subscribe(response => {
        if(response){
          this.walletInfo = response;
        }
      })
    }
  }

  addWallet(){
    this.viewWallet = true;
  }

  rechargeWallet(formData){
    if(formData.valid) {
      let reqObj = { 
        "amount": formData.value.walletAmount,
        "currency": "INR",
        "userId": "balatwo",
        "recieptId": this.makeOrderid()
     }

     
      this.paymentService.orderPlace(reqObj).subscribe(response => {
        console.log(response, 'place order');
        if(response) {
          const options: any = {
            key: 'rzp_test_ZeUhqzQZ4q0Gbg',
            amount: response['amount'], // amount should be in paise format to display Rs 1255 without decimal point
            currency: response['currency'],
            name: '', // company name or product name
            description: '',  // product description
            image: '/assets/images/logo/PNG/font120px.png', // company logo or product image
            order_id: response['id'], // order_id created by you in backend
            modal: {
              // We should prevent closing of the form when esc key is pressed.
              escape: false,
            },
            notes: {
              // include notes if any
            },
            theme: {
              color: '#f9a825'
            }
          };
          options.handler = ((response, error) => {
            options.response = response;
            console.log(response);
            console.log(options);

            // call your backend api to verify payment signature & capture transaction
            if(response) {
              this.verifySignature(response);
            }

          });
          options.modal.ondismiss = (() => {
            // handle the case when user closes the form while transaction is in progress
            console.log('Transaction cancelled.');
          });
          const rzp = new window['Razorpay'](options);
          rzp.open();
        }
      })
    }  
  }


  verifySignature(orderDetail){
    if(orderDetail) {
      let params = new HttpParams().set('signature', orderDetail.razorpay_signature).set('orderId', orderDetail.razorpay_order_id).set("paymentId", orderDetail.razorpay_payment_id);
      this.paymentService.signatureVerify(params).subscribe(response => {
        console.log(response, 'response signayture');
        if(response){
          this.updateWallet(orderDetail)
        }
      })
    }  
  }

  updateWallet(orderInfo){
    if(orderInfo){
      // let params = new HttpParams().set('userId', 'balatwo').set("orderId", orderInfo.razorpay_order_id);
      let params = {
        userId: 'balatwo',
        orderId: orderInfo.razorpay_order_id
      }
      this.paymentService.updateWalletInfo(params).subscribe(response => {
        console.log(response, 'wallet update');
        
      })
    }
  
  }



  // make order id
  makeOrderid() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 12; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    if(result) {
      result = "recieptId_"+result;
    }
    console.log(result, 'result');
    return result;
 }
  // make order id end
  
  

}