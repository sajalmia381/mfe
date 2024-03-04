import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'mfe-k8s-mfe-k8s-entry',
  template: `<mfe-k8s-nx-welcome></mfe-k8s-nx-welcome>`,
})
export class RemoteEntryComponent {}
