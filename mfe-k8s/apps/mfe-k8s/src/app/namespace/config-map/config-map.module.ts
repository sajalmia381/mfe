import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigMapRoutingModule } from './config-map-routing.module';
import { ConfigMapDetailsComponent } from './config-map-details/config-map-details.component';
import { ConfigMapListComponent } from './config-map-list/config-map-list.component';


@NgModule({
  declarations: [
    ConfigMapDetailsComponent,
    ConfigMapListComponent
  ],
  imports: [
    CommonModule,
    ConfigMapRoutingModule
  ]
})
export class ConfigMapModule { }
