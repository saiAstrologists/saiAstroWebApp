import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { FirebaseService } from '../shared/service/firebase/firebase.service';
import { ObservableDataService } from '../observables/behaviourSubject.service';

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
  constructor(public firebaseService : FirebaseService, public observableService: ObservableDataService) {
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

    this.firebaseService.getChatList().then(chatList => {
      if(chatList){
        this.allChatList = chatList;
        console.log(this.allChatList, 'all chat list');
      }
    })
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
  }

  viewchatListScreen(){
    this.viewChatScreen = false;
  }

}
