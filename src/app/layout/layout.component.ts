import { Component, OnInit,ViewChild, AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit  {


  constructor(private router: Router) { 
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
