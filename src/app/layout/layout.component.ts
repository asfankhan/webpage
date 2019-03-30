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


  constructor(private router: Router, 
    private info:InfoService, public socket: Socket) {

    this.socket.on("connect", ()=>{

    });

    this.socket.on("Sign Up", (data)=>{

      console.log(data)

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
  signIn(){

  }



  signOut(){

  }
}
