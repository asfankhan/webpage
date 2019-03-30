import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

//   public initSocket(){
//     this.socket.on("connect", ()=>{
//       console.log('connect')
//     });
//   }

//   sendMessage(msg: string){
//     this.socket.emit("message", msg);
// }
//   getMessage() {
//     this.socket.on("Message", ()=>{
//       console.log('Message')
//     });


//     // return this.socket
//     //     .fromEvent("message")
//     //     .map( data => data.msg );
//   }

  // User = {
  //   Email:"asfankhan0987@gmail.com",
  //   Password:"test",
  //   Friends:{
  //     "asfankhan95@gmail.com":{}
  //   },
  //   Rooms:{
  //     "0000000000":{
  //     RoomName:"Room Name 1",
  //     Owner:"asfankhan0987@gmail.com"
  //     }
  //   }
  // };
  User = null;

  Users = [{
    Email:"asfankhan95@gmail.com",
    Picture:"../../../assets/unknown.jpg",
    Background:"#508282"
  }];

  Rooms:any = [{
    id:"0000000000",
    RoomName:"Room Name 1",
    Owner:"asfankhan0987@gmail.com",
    Locked:false,
    Description:"this is a description of the tab that was created, it is only temporary and will be replaces"
  },{
    id:"0000000001",
    RoomName:"Room Name 2",
    Owner:"asfankhan95@gmail.com",
    Locked:true,
    Description:"this is a description of the tab that was created, it is only temporary and will be replaces"
  },{
    id:"0000000002",
    RoomName:"Room Name 3",
    Owner:"asfankhan95@gmail.com",
    Locked:true,
    Description:"this is a description of the tab that was created, it is only temporary and will be replaces"
  },{
    id:"0000000003",
    RoomName:"Room Name 4",
    Owner:"test@gmail.com",
    Locked:false,
    Description:"this is a description of the tab that was created, it is only temporary and will be replaces"
  }];

}
