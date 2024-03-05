import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const remoteRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'namespaces',
  },
  {
    path: 'namespaces',
    loadChildren: () =>
      import('../namespace/namespace.module').then((m) => m.NamespaceModule),
  },
  {
    path: 'applications',
    loadChildren: () =>
      import('../application/application.module').then(
        (m) => m.ApplicationModule
      ),
  },
  {
    path: 'clusters',
    loadChildren: () =>
      import('../cluster/cluster.module').then((m) => m.ClusterModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(remoteRoutes)],
  exports: [RouterModule],
})
export class RemoteRoutesModule {}
