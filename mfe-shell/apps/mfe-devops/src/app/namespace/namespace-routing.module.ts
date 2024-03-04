import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NamespaceListComponent } from './namespace-list/namespace-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NamespaceListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NamespaceRoutingModule {}
