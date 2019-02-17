import { Component, OnInit, ElementRef } from '@angular/core';

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

  constructor(private elRef:ElementRef) { 
    window.setInterval(() => {
      if(this.scrollRight){
        this.element.scrollBy(10,0);
      }
      if(this.scrollLeft){
        this.element.scrollBy(-10,0);
      }    
    }, 25)
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.element = this.elRef.nativeElement.querySelector('.scrolling-wrapper-flexbox');
  }
  isEdge(var1){
    if(var1==0)
      return -1;
    else if(var1==this.objStyle.length-1)
      return 1;
    else
      return 0;
  }

  objStyle=[{
    title:"Place Holder 1",
    color:"white",
    font:"23px",
    background:"#508282",
    background2:"#5a9292",
    width:'200px',
    description:"this is a description of the tab that was created, it is only temporary and will be replaces",
    subDescription:"this is a sub description",
    img:"../../../assets/temp.jpg"
  },{
    title:"Place Holder 2",
    color:"white",
    font:"23px",
    background:"#ad3f3f",
    background2:"#bd4949",
    width:'200px',
    description:"this is a description of the tab that was created, it is only temporary and will be replaces",
    subDescription:"this is a sub description",
    img:"../../../assets/temp.jpg"
  },{
    title:"Place Holder 3",
    color:"white",
    font:"23px",
    background:"#ad763f",
    background2:"#bd8349",
    width:'200px',
    description:"this is a description of the tab that was created, it is only temporary and will be replaces",
    subDescription:"this is a sub description",
    img:"../../../assets/temp.jpg"
  },{
    title:"Place Holder 4",
    color:"white",
    font:"23px",
    background:"#763fad",
    background2:"#8349bd",
    width:'200px',
    description:"this is a description of the tab that was created, it is only temporary and will be replaces",
    subDescription:"this is a sub description",
    img:"../../../assets/temp.jpg"
  },{
    title:"Place Holder 5",
    color:"white",
    font:"23px",
    background:"#bd49bd",
    background2:"#ad3fad",
    width:'200px',
    description:"this is a description of the tab that was created, it is only temporary and will be replaces",
    subDescription:"this is a sub description",
    img:"../../../assets/temp.jpg"
  },{
    title:"Place Holder 6",
    color:"white",
    font:"23px",
    background:"#508250",
    background2:"#5a925a",
    width:'200px',
    description:"this is a description of the tab that was created, it is only temporary and will be replaces",
    subDescription:"this is a sub description",
    img:"../../../assets/temp.jpg"
  }]
}
