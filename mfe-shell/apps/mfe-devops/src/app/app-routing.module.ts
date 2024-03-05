import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'devops',
    loadChildren: () => import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./remote-entry/nx-welcome.component').then((m) => m.NxWelcomeComponent),
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
