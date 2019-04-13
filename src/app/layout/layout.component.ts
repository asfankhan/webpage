import { Component, OnInit,ViewChild, AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from './services/info.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit  {

  signUpData = null;
  signInData = null;
  user = null
  roomData = []

  constructor(private router: Router, 
    private info:InfoService, public socket: Socket) {

    this.socket.on("connect", ()=>{

    });

    this.socket.on("Sign Up", (data)=>{
      this.signUpData = data;
      console.log("Sign Up Data")
      console.log(data)
    });
    this.socket.on("Sign In", (data)=>{
      this.signInData = data;
      console.log("Sign In Data")
      console.log(data)
      if(!data.error)
        this.user = data.data
    });
    this.socket.on("Sign Out", ()=>{
      this.signInData = null;
      console.log("Sign Out Data")
    });

    this.socket.on("Room Create", ()=>{

    });

    this.socket.on("Room Join", ()=>{
      
    });
    // this.info.initSocket();

    this.router.navigate(['']);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  signUp(email, password){

    let userInfo = {
      email: email,
      password: password
    }
    this.socket.emit("Sign Up", userInfo)

  }
  signIn(email, password){
    let userInfo = {
      email: email,
      password: password
    }
    this.socket.emit("Sign In", userInfo)

  }
  signOut(){
    this.socket.emit("Sign Out")

  }

  roomsGet(){
    if(this.user)
    {
      this.socket.emit("Room Get", this.user)
    }
  }

  roomCreate(name){
    if(this.user)
    {
      this.socket.emit("Room Create", this.user, name)
    }
  }

  roomJoin(){
    if(this.user)
    {
      this.socket.emit("Room Join", this.user)
    }
  }


}
