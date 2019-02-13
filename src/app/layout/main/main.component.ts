import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  url = '';
  binary;
  
  objStyle=[{
    title:"Place Holder",
    color:"white",
    font:"23px",
    background:"#508282",
    background2:"#5a9292",
    width:'200px',
    description:"this is a description of the tab that was created, it is only temporary and will be replaces",
    subDescription:"this is a sub description",
    img:"../../../assets/temp.jpg"
  },{
    title:"Place Holder2",
    color:"white",
    font:"23px",
    background:"#508250",
    background2:"#5a925a",
    width:'200px',
    description:"this is a description of the tab that was created, it is only temporary and will be replaces",
    subDescription:"this is a sub description",
    img:"../../../assets/temp.jpg"
  }]

  constructor(private elRef:ElementRef) { }

  ngOnInit() {
  }

}
