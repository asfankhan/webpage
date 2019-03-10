import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition} from '@angular/animations';
import { Router } from '@angular/router';

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

  sidebarItem = 0;
  menuItem = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  private ChangeRoute(route:any,sidebarItem, menuItem){
    this.router.navigate([route]);
    this.sidebarItem = sidebarItem;
    this.menuItem = menuItem;
  }

  selectMenuItem(){
  }
}
