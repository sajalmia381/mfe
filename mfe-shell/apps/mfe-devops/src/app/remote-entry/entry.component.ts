import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'mfe-shell-mfe-devops-entry',
  template: `<mfe-shell-nx-welcome></mfe-shell-nx-welcome>`,
})
export class RemoteEntryComponent {}
