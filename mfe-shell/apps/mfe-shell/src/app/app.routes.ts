import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('mfe-devops/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'k8s',
    loadChildren: () => loadRemoteModule('mfe-k8s', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
