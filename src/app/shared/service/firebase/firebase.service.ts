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
  allUserList = [];

  constructor(public observableService : ObservableDataService) {
    console.log(firebase, 'firebase');
    
    if(sessionStorage.getItem('userFirebaseData')){
      this.getFirebaseUserData = JSON.parse(sessionStorage.getItem('userFirebaseData'));
    }

    this.getAllUserList();

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
        message: message,
        // timeStamp: new Date().valueOf()
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
    if(sessionStorage.getItem('userFirebaseData')){
      this.getFirebaseUserData = JSON.parse(sessionStorage.getItem('userFirebaseData'));
    } 
    firebase.database().ref().child('Chats').limitToLast(10).on('child_added', snapShot => {
      let sender = this.getFirebaseUserData ? this.getFirebaseUserData.id: null;
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

    firebase.database().ref().child('Chats').on('child_changed', snapShot => {
      if(snapShot.key){

        let sender = this.getFirebaseUserData ? this.getFirebaseUserData.id: null;
        let receiver = sessionStorage.getItem('receiverId');
        let convId ;
        if(sender >  receiver) {
          convId = receiver + '-' + sender;
        }else {
          convId = sender + '-' + receiver;
        }

        if(snapShot.key ==  convId){
          let value = Object.values(snapShot.val())[Object.values(snapShot.val()).length - 1];
          this.observableService.messageData(value);
          return value;
        }
      }
    })
  }


  // get chat list
  getChatList(){
    let promise = new Promise((resolve, reject) => {
      if(sessionStorage.getItem('userFirebaseData')){
        this.getFirebaseUserData = JSON.parse(sessionStorage.getItem('userFirebaseData'));
      } 
  
      let chatList = [];
  
      firebase.database().ref('Chats').once('value', snapShot => {
        let allConversationList = snapShot.val();
        if(allConversationList){
          for (let key in allConversationList){
            if(key.includes(this.getFirebaseUserData.id)){

              let userData: any;
              let lastConversationDetail =  Object.values(allConversationList[key])[Object.values(allConversationList[key]).length - 1];

              // get user data on login basis 
              if(this.getFirebaseUserData && this.getFirebaseUserData.id == lastConversationDetail['sender']){
                userData =  this.allUserList.find(list => list.id == lastConversationDetail['receiver']);
              }else {
                userData =  this.allUserList.find(list => list.id == lastConversationDetail['sender']);
              }
              // get user data end

              let createChatListObj = {};
              createChatListObj['lastMessage'] = lastConversationDetail['message'];
              createChatListObj['name'] = userData ? userData.username : null;
              createChatListObj['id'] = userData ? userData.id : null;
              createChatListObj['imageURL'] = userData ? userData.imageURL : null;
              createChatListObj['shortName'] = this.getShortName(userData.username);
              createChatListObj['color'] = Math.floor(Math.random()*16777215).toString(16);
              chatList.push(createChatListObj);
            }
          }

          resolve(chatList);
        }
      })
    });
    return promise;
   
  }
  // get chat list end


  getAllUserList(){
    console.log(firebase, 'firebase');
    
    firebase.database().ref('Users').once('value', snapShot => {
      let userList = snapShot.val();
      if(userList) {
        Object.values(snapShot.val()).forEach(list => this.allUserList.push(list));
      }
    })
  }

  // short name
  getShortName(name){
    if(name){
      let namelist = name.split(' ');
      if(namelist && namelist.length > 1){
        return namelist[0].charAt(0) + namelist[1].charAt(0);
      }else {
        return namelist[0].charAt(0);
      }
    }
  }
}
