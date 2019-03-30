import { Component, OnInit, ElementRef } from '@angular/core';

import { InfoService } from '../services/info.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  scrollRight;
  scrollLeft;
  url = '';
  binary;
  
  element;

  SelectedObjects = ["#508282","#cd5c5c"]
  NotSelectedObjects = ["#222","#333","#444","#555","#666"]
  
  constructor(private elRef:ElementRef, public data:InfoService,
    private socket: Socket) { 

    // window.setInterval(() => {
    //   if(this.scrollRight){
    //     this.element.scrollBy(10,0);
    //   }
    //   if(this.scrollLeft){
    //     this.element.scrollBy(-10,0);
    //   }    
    // }, 25)
    this.setColors();
  }
  ngOnInit() {

  }
  setColors(){
    // if(this.data.User){
  
    // for(let i = 0; i < this.data.Rooms.length; i++){
    //   if(!this.data.Rooms[i].Client)
    //     this.data.Rooms[i].Client = {}

    //   console.log(this.data.Rooms[i].id)
    //   console.log(this.data.User.Rooms)

    //   console.log(this.data.User.Rooms[this.data.Rooms[i].id])
      
    //   if( this.data.User.Rooms[this.data.Rooms[i].id] ){
    //     this.data.Rooms[i].Client.Background = this.SelectedObjects[Math.floor(Math.random() * Math.floor(this.SelectedObjects.length))]
    //   }else{
    //     this.data.Rooms[i].Client.Background = this.NotSelectedObjects[Math.floor(Math.random() * Math.floor(this.NotSelectedObjects.length))]
    //   }
    // }

    // }
  }

 
  ngAfterViewInit() {
    // this.element = this.elRef.nativeElement.querySelector('.scrolling-wrapper-flexbox');
  }
  isEdge(var1){
    // if(var1==0)
    //   return -1;
    // else if(var1==this.objStyle.length-1)
    //   return 1;
    // else
    //   return 0;
  }


}
