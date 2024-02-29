import react from '@vitejs/plugin-react';
import { PluginOption } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import istanbul from 'vite-plugin-istanbul';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '/',
  build: {
    manifest: true,
    sourcemap: true,
  },
  envDir: './',
  plugins: [
    ...react(),
    viteTsconfigPaths(),
    istanbul({
      cypress: true,
      requireEnv: !process.env.CYPRESS,
      checkProd: true,
    }),
  ] as PluginOption[],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    reporters: ['default', 'vitest-sonar-reporter'],
    outputFile: 'sonar-report.xml',
    include: ['./src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
    coverage: {
      clean: false,
      provider: 'istanbul',
      reporter: [['json', { file: '../.nyc_output/vitest-out.json' }]],
      include: ['src/**/*.{js,ts,jsx,tsx}'],
      exclude: [
        'cypress/**/*.*',
        '**/*.d.ts',
        '**/*.cy.{ts,tsx}',
        'src/**/tests/**/*.{js,jsx,ts,tsx}',
        'src/**/*.{spec,test}.{js,jsx,ts,tsx}',
        'src/setupTests.ts',
        'coverage/**',
      ],
    },
  },
});
