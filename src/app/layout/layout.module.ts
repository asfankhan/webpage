import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { TileComponent } from './tile/tile.component';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, MainComponent, TileComponent, LoginViewComponent],
  imports: [
    LayoutRoutingModule, CommonModule,FormsModule
  ]
})
export class LayoutModule { }
