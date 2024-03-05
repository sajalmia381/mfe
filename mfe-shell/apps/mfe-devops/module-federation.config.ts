import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mfe-devops',
  exposes: {
    './RemoteEntryModule': 'apps/mfe-devops/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
