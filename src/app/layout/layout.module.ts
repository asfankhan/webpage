import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { TileComponent } from './components/tile/tile.component';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, MainComponent, TileComponent, LoginViewComponent],
  imports: [
    LayoutRoutingModule, CommonModule,FormsModule,SocketIoModule.forRoot(config)
  ]
})
export class LayoutModule { }
