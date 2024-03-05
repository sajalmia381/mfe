import { NgModule } from "@angular/core";
import { RemoteEntryComponent } from "./entry.component";
import { RouterModule } from "@angular/router";
import { remoteRoutes } from "./entry.routes";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
})
export class RemoteEntryModule {}