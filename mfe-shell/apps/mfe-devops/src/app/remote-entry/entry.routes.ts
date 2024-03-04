import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  {
    path: 'namespaces',
    loadChildren: () =>
      import('../namespace/namespace.module').then((m) => m.NamespaceModule),
  },
  {
    path: 'applications',
    loadChildren: () =>
      import('../application/application.module').then((m) => m.ApplicationModule),
  },
  {
    path: 'clusters',
    loadChildren: () =>
      import('../cluster/cluster.module').then((m) => m.ClusterModule),
  },
];
