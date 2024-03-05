import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'devops',
    loadChildren: () => loadRemoteModule('mfe-devops', './RemoteEntryModule').then((m) => m.RemoteEntryModule),
  },
  // {
  //   path: 'k8s',
  //   loadChildren: () =>
  //     loadRemoteModule('mfe-k8s', './Routes').then((m) => m.remoteRoutes),
  // },
  {
    path: '',
    loadComponent: () =>
      import('./nx-welcome.component').then((m) => m.NxWelcomeComponent),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      // preloadingStrategy: PreloadAllModules,
      // scrollPositionRestoration: 'enabled',
      // anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
