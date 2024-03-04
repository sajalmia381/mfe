import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClusterListComponent } from './cluster-list/cluster-list.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    component: ClusterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClusterRoutingModule { }
