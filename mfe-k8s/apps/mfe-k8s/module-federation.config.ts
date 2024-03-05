import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mfe-k8s',
  remotes: [['mfe-shell', 'http://localhost:4200/remoteEntry.mjs']],
  exposes: {
    './Routes': 'apps/mfe-k8s/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
