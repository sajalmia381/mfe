import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mfe-devops',
  exposes: {
    './Routes': 'apps/mfe-devops/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
