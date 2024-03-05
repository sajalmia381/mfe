import { ModuleFederationConfig } from '@nx/webpack';

const coreLibraries = new Set([
  '@angular/core',
  '@angular/common',
  '@angular/common/http',
  '@angular/router',
  // A workspace library for a publish/subscribe
  // system of communication.
]);

const config: ModuleFederationConfig = {
  name: 'mfe-shell',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: [], // 'mfe-devops' ,['mfe-k8s', 'http://localhost:4202/remoteEntry.mjs']
  
  // library: { type: 'var', name: 'appshell' },
  exposes: {
    './AppModule': 'apps/mfe-shell/src/app/app.module.ts',
    './ShellBootstrap': 'apps/mfe-shell/src/bootstrap.ts',
  },

  // // Share core libraries, and avoid everything else
  // shared: (libraryName, defaultConfig) => {
  //   if (coreLibraries.has(libraryName)) {
  //     return defaultConfig;
  //   }
  //   // Returning false means the library is not shared.
  //   return false;
  // },
  additionalShared: [
    {
      libraryName: '@angular/core',
      sharedConfig: { singleton: true, strictVersion: true },
    },
    {
      libraryName: '@angular/common',
      sharedConfig: { singleton: true, strictVersion: true },
    },
    {
      libraryName: '@angular/router',
      sharedConfig: { singleton: true, strictVersion: true },
    },
  ],
};

export default config;
