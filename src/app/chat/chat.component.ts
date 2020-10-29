import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';
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
  @Input() viewChatOption : boolean;
  constructor(public firebaseService : FirebaseService, public observableService: ObservableDataService) {
    this.chatForm = new FormGroup({
      message: new FormControl()
    });

    if(sessionStorage.getItem('userFirebaseData')){
      this.getFirebaseUserData = JSON.parse(sessionStorage.getItem('userFirebaseData'));
    }  

    this.getAllMessage();
    // this.firebaseService.messageListener();

    // get subject message
    this.observableService.getMessage.asObservable().subscribe(messageRes => {
      this.chatList.push(messageRes);
    })
  }

  ngOnInit(): void {
  }

  getAllMessage(){
    this.firebaseService.getAllMessages().then(response => {
      this.chatList = response;
    });
  }

  sendMessage(){
    this.firebaseService.sendMessages(this.chatForm.value.message);
  }

}
