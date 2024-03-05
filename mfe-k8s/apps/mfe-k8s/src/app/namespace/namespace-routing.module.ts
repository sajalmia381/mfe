import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'deployments'
  },
  {
    path: 'deployments',
    loadChildren: () => import('./deployment/deployment.module').then(m => m.DeploymentModule)
  },
  {
    path: 'config-maps',
    loadChildren: () => import('./config-map/config-map.module').then(m => m.ConfigMapModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NamespaceRoutingModule { }
