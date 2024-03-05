import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeploymentRoutingModule } from './deployment-routing.module';
import { DeploymentListComponent } from './deployment-list/deployment-list.component';
import { DeploymentDetailsComponent } from './deployment-details/deployment-details.component';


@NgModule({
  declarations: [
    DeploymentListComponent,
    DeploymentDetailsComponent
  ],
  imports: [
    CommonModule,
    DeploymentRoutingModule
  ]
})
export class DeploymentModule { }
