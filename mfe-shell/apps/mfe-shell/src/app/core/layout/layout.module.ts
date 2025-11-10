import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
