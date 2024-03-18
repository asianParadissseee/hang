import { defineConfig } from '@rsbuild/core';
import { pluginSvelte } from '@rsbuild/plugin-svelte';

export default defineConfig({
  plugins: [pluginSvelte()],
  html: {
    favicon: '',
    title: 'Vibrant',
    appIcon: '',
  },
  source: {
    alias: (alias) => {
      return {
        '@atoms': './src/atoms',
        '@molecules': './src/molecules',
        '@organisms': './src/organisms',
        '@templates': './src/templates',
        '@pages': './src/pages',
        '@app': './src/app',
        '@commons': './src/commons',
      };
    },
  },
});
