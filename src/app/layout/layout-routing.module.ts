import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

// const routes: Routes = [];

const LAYOUT_ROUTES: Routes = [
    {
        path: '',
        component: LayoutComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(LAYOUT_ROUTES)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
