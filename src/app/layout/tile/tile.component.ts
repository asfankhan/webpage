import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() data;

  @Input() edge;

  @Input() bodyTemplate: TemplateRef <any>;

  
  inputData={
    width:'',
    background:''
  };

  onHover=0;

  constructor() { }

  ngOnInit() {
    console.log(this.edge)
    this.inputData.width = '200px';
    this.inputData.background = this.data.background;

  }

  onClick(){
    if(this.onHover==0){
      this.onHover=1;
      this.inputData.width = '500px'
      this.inputData.background = this.data.background2;  
    }else{
      this.onHover=0;
      this.inputData.width = '200px'
      this.inputData.background = this.data.background;
  
    }
  }

  onMouseLeave(){
    this.onHover=0;
    this.inputData.width = '200px'
    this.inputData.background = this.data.background;
  }
}
