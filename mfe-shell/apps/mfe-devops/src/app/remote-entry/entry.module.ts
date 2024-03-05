import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteEntryComponent } from './entry.component';
import { RemoteRoutesModule } from './entry.routes';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, RemoteRoutesModule],
  providers: [],
})
export class RemoteEntryModule {}
