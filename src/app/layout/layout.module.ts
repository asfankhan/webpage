import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, MainComponent, TileComponent],
  imports: [
    LayoutRoutingModule, CommonModule
  ]
})
export class LayoutModule { }
