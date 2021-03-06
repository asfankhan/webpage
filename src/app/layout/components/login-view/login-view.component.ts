import { Component, OnInit, HostListener, EventEmitter,ViewChild } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { InfoService } from '../../services/info.service';

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

  @ViewChild("loginView") lview;

  //mouseup = new EventEmitter();
  //@HostListener('mouseup', ['$event'])
  //onMouseup(e) {
  //}

  enteredEmail = 'asfankhan0987@gmail.com'
  enteredPassword = 'test'

  loggedIn = false;
  
  hideDisplay = false;
  movingDisplay = false;
  position = {
    x: window.innerWidth - 305,
    y: 10
  }

  itemDoc;
  item;

  constructor(private afs: AngularFirestore, public data:InfoService) { }

  ngOnInit() {

  }

  LoginError = ''
  login(){
    // console.log(this.enteredEmail + "-" + this.enteredPassword)
    // this.itemDoc = this.afs.doc('Users/'+ this.enteredEmail + "-" + this.enteredPassword );
    // this.item = this.itemDoc.valueChanges().subscribe( data => {
    //   console.log("--==valueChanges==--");
    //   console.log(data);
    //   this.enteredEmail = "";
    //   this.enteredPassword = "";
    //   if(data){
    //     this.data.User = data
    //   }else{
    //     this.LoginError = " Incorrect Email/Password"
    //   }
  	// });
  }

  register(){
    // this.itemDoc = this.afs.doc('Users/'+ this.enteredEmail + "-" + this.enteredPassword );
    // this.item = this.itemDoc.valueChanges().subscribe( data => {
		//   console.log("--==valueChanges==--");
    //   console.log(data);

    //   this.LoginError = "Problem making Account"
    //   this.enteredEmail = "";
    //   this.enteredPassword = "";

  	// });

  }

  loggout(){
    this.data.User = null;
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
      let view = this.lview.nativeElement;
      // console.log(e)
      // console.log(this.lview)
      // console.log(window.innerWidth)
      // console.log(e.pageX)
      // console.log(this.lview.scrollWidth/2 )

      if(window.innerWidth - view.scrollWidth/2 > e.pageX &&  view.scrollWidth/2 < e.pageX ){
        this.position.x = e.pageX - view.scrollWidth/2;

      }
      if(window.innerHeight - view.scrollHeight/2 > e.pageY &&  view.scrollHeight/2 + 10 < e.pageY){
        this.position.y = e.pageY - view.scrollHeight/2;  
      }
    }
  }

  setDiv(e){
    this.movingDisplay = false

    console.log(e)
  }


}
