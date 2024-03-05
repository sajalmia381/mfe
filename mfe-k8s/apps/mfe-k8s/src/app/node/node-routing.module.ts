import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NodeListComponent } from './node-list/node-list.component';

const routes: Routes = [
  {
    path: '',
    component: NodeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NodeRoutingModule { }
