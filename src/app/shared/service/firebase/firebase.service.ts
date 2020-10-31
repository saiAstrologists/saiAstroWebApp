import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { reject } from '../../../../../node_modules/@types/q';
import { ObservableDataService } from '../../../observables/behaviourSubject.service';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  getFirebaseUserData: any;

  constructor(public observableService : ObservableDataService) {
    if(sessionStorage.getItem('userFirebaseData')){
      this.getFirebaseUserData = JSON.parse(sessionStorage.getItem('userFirebaseData'));
    }

    this.messageListener();
  }

  loginFirebase(data): Promise<any>{
    let promise = new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(response => {
        console.log(response, 'response');
        if(response.user.uid){
          firebase.database().ref().child('Users').child(response.user.uid).once('value', (snapShot) => {
            console.log(snapShot.val(), 'user data');
            // return snapShot.val();

            sessionStorage.setItem('userFirebaseData', JSON.stringify(snapShot.val()));
            resolve(snapShot.val());
          })
        }
      }, error=> {
        this.signInFirebase(data);
      })
    });
    return promise;
  }

  signInFirebase(data) : Promise<any>{
    let promise = new Promise((resolve , reject) => {
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(response => {
        let userData = {
          id: response.user.uid,
          imageURL: '',
          status: '',
          username: data.name
        }
  
        console.log(response.user.uid, 'local id');
        firebase.database().ref().child('Users').child(response.user.uid).set(userData).then(response => {
          console.log(response);
          sessionStorage.setItem('userFirebaseData', JSON.stringify(userData));
          resolve(userData);
        });
      })
    });
    return promise;
  }

  sendMessages(message): Promise<any>{
    if(sessionStorage.getItem('userFirebaseData')){
      this.getFirebaseUserData = JSON.parse(sessionStorage.getItem('userFirebaseData'));
    }    
    let promise = new Promise((resolve, reject) => {
      let sender = this.getFirebaseUserData.id;
      let receiver = sessionStorage.getItem('receiverId');
      let convId ;
      if(sender >  receiver) {
        convId = receiver + '-' + sender;
      }else {
        convId = sender + '-' + receiver;
      }
      let reqObj = {
        sender: this.getFirebaseUserData.id,
        receiver: sessionStorage.getItem('receiverId'),
        isseen: false,
        message: message
      }
      let key = firebase.database().ref().child('Chats').push().key;
      if(convId && sender && receiver) {
        firebase.database().ref().child('Chats').child(convId).child(key).set(reqObj).then(sendVal => {
          console.log(sendVal, 'send value');
          resolve(reqObj); 
        });
      } 
    });
    return promise;
  }

  getAllMessages(): Promise<any>{
    if(sessionStorage.getItem('userFirebaseData')){
      this.getFirebaseUserData = JSON.parse(sessionStorage.getItem('userFirebaseData'));
    }    
    let promise = new Promise((resolve, reject) => {
      let sender = this.getFirebaseUserData.id;
      let receiver = sessionStorage.getItem('receiverId');
      let convId ;
      if(sender >  receiver) {
        convId = receiver + '-' + sender;
      }else {
        convId = sender + '-' + receiver;
      }
      firebase.database().ref('Chats').child(convId).once('value', (snapShot) => {
        console.log(snapShot.val(), 'value');
        let chatList = [];
        if(snapShot.val()){
          Object.values(snapShot.val()).forEach(list => {
            if(list){
              chatList.push(list);
            }
          });
          // return chatList;
          resolve(chatList);
        }       
      })
    });
    return promise;
  }

  messageListener(){
    firebase.database().ref().child('Chats').limitToLast(1).on('child_added', snapShot => {
      let sender = this.getFirebaseUserData.id;
      let receiver = sessionStorage.getItem('receiverId');
      let convId ;
      if(sender >  receiver) {
        convId = receiver + '-' + sender;
      }else {
        convId = sender + '-' + receiver;
      }
      if(snapShot.key == convId){
        let value = Object.values(snapShot.val())[Object.values(snapShot.val()).length - 1];
        this.observableService.messageData(value);
        return value
      }
    })

    firebase.database().ref().child('Chats').limitToLast(1).on('child_changed', snapShot => {
      if(snapShot.key){
        let value = Object.values(snapShot.val())[Object.values(snapShot.val()).length - 1];
        this.observableService.messageData(value);
        return value;
      }
    })
  }
}
