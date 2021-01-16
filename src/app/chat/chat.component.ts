import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { FirebaseService } from '../shared/service/firebase/firebase.service';
import { ObservableDataService } from '../observables/behaviourSubject.service';
import { PaymentService } from '../shared/service/payment/payment.service';
import { HttpParams } from '../../../node_modules/@angular/common/http';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chatForm: FormGroup;
  chatList: any = [];
  getFirebaseUserData: any;
  chatName =  '';
  allChatList: any = [];
  viewChatScreen: boolean = false;
  @Input() viewChatOption : boolean = true;
  timer: any;
  constructor(public firebaseService : FirebaseService, public observableService: ObservableDataService, private paymentService:PaymentService, private chatService: ChatService) {
    this.chatForm = new FormGroup({
      message: new FormControl('', Validators.required)
    }); 

    if(sessionStorage.getItem('userFirebaseData')){
      this.getFirebaseUserData = JSON.parse(sessionStorage.getItem('userFirebaseData'));
    }  
    // this.firebaseService.messageListener();

    // get subject message
    this.observableService.getMessage.asObservable().subscribe(messageRes => {
      if(messageRes){
        this.chatList.push(messageRes);
        setTimeout(() => {
          let element = document.getElementById('chatWrap');
          if (element) {						
            element.scrollTop = element.scrollHeight;
          }
        }, 100);
      }
    })
  }

  ngOnInit(): void {

    this.chatListDetail();


    // if has receiver id
    if(sessionStorage.getItem('receiverId') && sessionStorage.getItem('chatUserDetail')){
      let chatUserData = JSON.parse(sessionStorage.getItem('chatUserDetail'));
      this.chatName = chatUserData ? chatUserData.name: '';
      this.viewChatScreen = true;
      this.startTimer();
    }
    // if has receiver id end
  }


  chatListDetail(){
    this.firebaseService.getChatList().then(chatList => {
      if(chatList){
        this.allChatList = chatList;
        console.log(this.allChatList, 'all chat list');
      }
    });
  }

  getAllMessage(){
    this.firebaseService.getAllMessages().then(response => {
      this.chatList = response;
    });
  }

  sendMessage(){
    this.firebaseService.sendMessages(this.chatForm.value.message);
    this.chatForm.reset();
  }

  getChatMsgScreen(chatInfo){
    console.log(chatInfo, 'chat info');
    this.chatName = chatInfo.name;
    sessionStorage.setItem('receiverId', chatInfo.id);
    
    this.viewChatScreen = true;
    this.getAllMessage();

  this.startTimer();
  }

  viewchatListScreen(){
    this.viewChatScreen = false;
    clearInterval(this.timer);
    this.deductChatAmount();
    sessionStorage.removeItem('chatName');
    this.chatListDetail();
  }


  placeOrder(){
    let reqObj = { 
      "amount": 50,
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

  getWalletInfo(){
    let params = new HttpParams().set('userId', "balatwo");
    this.paymentService.walletInfo(params).subscribe(response => {
      if(response){
        console.log(response, 'wallet info');
      }
    })
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
      this.paymentService.updateWalletInfo(params, '').subscribe(response => {
        console.log(response, 'wallet update');
        
      })
    }
  
  }

  startTimer(){
    let sec = 0;
    let min = 0;
    // start timer
    this.timer = setInterval(() => {
      sec++;
      if(sec > 59){
        sec = 0;
        min++;
      }
      let chatTime = (((min && min < 10) ? '0'+min : min)+ ':' + ((sec && sec < 10) ? '0' + sec : sec));
      localStorage.setItem('time', min.toString());
      console.log(chatTime, 'chat time');
      return chatTime;
      
    }, 1000);
    // start timer end
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

  ngOnDestroy(){
    clearInterval(this.timer);
    this.deductChatAmount();
  }

  deductChatAmount(){
    let userData = JSON.parse(sessionStorage.getItem('userData'));
    let chatUserData = JSON.parse(sessionStorage.getItem('chatUserDetail'));
    let reqObj = {
      type: 'chat',
      minutes: localStorage.getItem('time') ? parseInt(localStorage.getItem('time')): '',
      userId: userData.userId,
      astrologerId: chatUserData.userId
    }
    this.chatService.deductChatBalance(reqObj).subscribe(response => {
      console.log(response, 'chat response');
      localStorage.removeItem('time');
    })
  }
}
