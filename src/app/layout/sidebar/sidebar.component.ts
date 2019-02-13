import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition} from '@angular/animations';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({ opacity: '1' })),
      state('false', style({ opacity: '.5' })),
      transition('false <=> true', animate(1500))
    ])
  ],
})
export class SidebarComponent implements OnInit {

  showSidebarTab = -1;

  sidebarItem = -1;
  menuItem = -1;

  constructor() { }

  ngOnInit() {
  }
  
  selectMenuItem(sidebarItem, menuItem){
    this.sidebarItem = sidebarItem;
    this.menuItem = menuItem;
  }
}
