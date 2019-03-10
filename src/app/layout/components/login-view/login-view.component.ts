import { Component, OnInit, HostListener, EventEmitter } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(200)),
    ]),
    
  ]
})
export class LoginViewComponent implements OnInit {

  //mouseup = new EventEmitter();
  //@HostListener('mouseup', ['$event'])
  //onMouseup(e) {
  //}

  enteredEmail = 'asfankhan0987@gmail.com'
  enteredPassword = 'test'

  loggedIn = false;
  User = null;
  
  hideDisplay = false;
  movingDisplay = false;
  position = {
    x: window.innerWidth - 305,
    y: 10
  }

  itemDoc;
  item;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {

  }

  LoginError = ''
  login(){
    console.log(this.enteredEmail + "-" + this.enteredPassword)
    this.itemDoc = this.afs.doc('Users/'+ this.enteredEmail + "-" + this.enteredPassword );
    this.item = this.itemDoc.valueChanges().subscribe( data => {
      console.log("--==valueChanges==--");
      console.log(data);
      this.enteredEmail = "";
      this.enteredPassword = "";
      if(data){
        this.User = data;
      }else{
        this.LoginError = " Incorrect Email/Password"
      }
  	});
  }

  register(){
    this.itemDoc = this.afs.doc('Users/'+ this.enteredEmail + "-" + this.enteredPassword );
    this.item = this.itemDoc.valueChanges().subscribe( data => {
		  console.log("--==valueChanges==--");
      console.log(data);

      this.LoginError = "Problem making Account"
      this.enteredEmail = "";
      this.enteredPassword = "";

  	});

  }

  loggout(){
    this.User = null;
    this.hideDisplay = false;
  }

  getDiv(e, loginView) {
    this.movingDisplay = true
    //ev.dataTransfer.setData("text", ev.target.id);
    console.log(e)
    console.log(loginView)
  }

  moveDiv(e){
    if(this.movingDisplay == true){
      console.log(e)
      this.position.x = e.pageX - 150;
      this.position.y = e.pageY - 12.5;
    }
  }

  setDiv(e){
    this.movingDisplay = false

    console.log(e)
  }


}
