import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
    }),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'core_ui',
      fileName: (format) => `index.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@ark-ui/react', 'react/jsx-runtime'],
      output: {
        dir: 'dist',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@ark-ui/react': 'ArkUI',
        },
        chunkFileNames: '[name].js',
        compact: true,
        minifyInternalExports: true,
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
        unknownGlobalSideEffects: false,
      },
    },

    emptyOutDir: true,
    minify: true,
    sourcemap: true,
    copyPublicDir: false,
  },
  esbuild: {
    minifyWhitespace: true,
    treeShaking: true,
    drop: ['console', 'debugger'],
    target: 'esnext',
    keepNames: false,
    pure: ['jsx'],
    sourcemap: true,
  },
});
