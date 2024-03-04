import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NamespaceRoutingModule } from './namespace-routing.module';
import { NamespaceListComponent } from './namespace-list/namespace-list.component';

@NgModule({
  declarations: [NamespaceListComponent],
  imports: [CommonModule, NamespaceRoutingModule],
})
export class NamespaceModule {}
