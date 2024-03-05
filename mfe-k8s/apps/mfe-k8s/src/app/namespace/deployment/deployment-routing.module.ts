import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeploymentListComponent } from './deployment-list/deployment-list.component';
import { DeploymentDetailsComponent } from './deployment-details/deployment-details.component';

const routes: Routes = [
  {
    path: 'details',
    component: DeploymentDetailsComponent
  },
  {
    path: '',
    component: DeploymentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeploymentRoutingModule { }
