import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mfe-k8s',

  exposes: {
    './Module': 'apps/mfe-k8s/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
