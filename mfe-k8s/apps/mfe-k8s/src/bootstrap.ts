// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { RemoteEntryComponent } from './app/remote-entry/entry.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// bootstrapApplication(RemoteEntryComponent, appConfig).catch((err) =>
//   console.error(err)
// );
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err))


// import('mfe-shell/AppModule').then((m) =>
//   platformBrowserDynamic()
//     .bootstrapModule(m.AppModule)
//     .catch((err) => console.error(err))
// );