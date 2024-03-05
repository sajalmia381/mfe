import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NodeRoutingModule } from './node-routing.module';
import { NodeListComponent } from './node-list/node-list.component';


@NgModule({
  declarations: [
    NodeListComponent
  ],
  imports: [
    CommonModule,
    NodeRoutingModule
  ]
})
export class NodeModule { }
