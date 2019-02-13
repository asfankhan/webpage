import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() data;

  @Input() bodyTemplate: TemplateRef <any>;

  inputData={
    width:'',
    background:''
  };

  onHover=0;

  constructor() { }

  ngOnInit() {
    this.inputData.width = '200px';
    this.inputData.background = this.data.background;

  }

  onMouseHover(){
    this.onHover=1;
    this.inputData.width = '500px'
    this.inputData.background = this.data.background2;
  }

  onMouseLeave(){
    this.onHover=0;
    this.inputData.width = '200px'
    this.inputData.background = this.data.background;
  }
}
