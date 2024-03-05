import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigMapDetailsComponent } from './config-map-details/config-map-details.component';
import { ConfigMapListComponent } from './config-map-list/config-map-list.component';

const routes: Routes = [
  {
    path: 'details',
    component: ConfigMapDetailsComponent
  },
  {
    path: '',
    component: ConfigMapListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigMapRoutingModule { }
