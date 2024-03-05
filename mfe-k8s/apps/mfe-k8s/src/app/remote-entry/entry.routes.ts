import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'nodes'
      },
      {
        path: 'nodes',
        loadChildren: () => import('../node/node.module').then(m => m.NodeModule)
      },
      {
        path: 'namespaces',
        loadChildren: () => import('../namespace/namespace.module').then(m => m.NamespaceModule)
      }
    ]
  }
];
