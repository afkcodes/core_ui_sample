// import react from '@vitejs/plugin-react';
// import { resolve } from 'path';
// import { defineConfig } from 'vite';
// import dts from 'vite-plugin-dts';

// export default defineConfig({
//   plugins: [
//     react(),
//     dts({
//       insertTypesEntry: true,
//       include: ['src/'],
//     }),
//   ],
//   build: {
//     lib: {
//       entry: resolve(__dirname, 'src/index.ts'),
//       name: 'core_ui',
//       fileName: (format) => `index.${format}.js`,
//     },
//     rollupOptions: {
//       external: ['react', 'react-dom', '@ark-ui/react'],
//       output: [
//         {
//           format: 'es',
//           globals: {
//             react: 'React',
//             'react-dom': 'ReactDOM',
//             '@ark-ui/react': 'ArkUI',
//           },
//         },
//         {
//           format: 'cjs',
//           globals: {
//             react: 'React',
//             'react-dom': 'ReactDOM',
//             '@ark-ui/react': 'ArkUI',
//           },
//         },
//       ],
//     },
//     sourcemap: true,
//     cssCodeSplit: false,
//     cssMinify: true,
//   },
// });

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src/'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'core_ui',
      fileName: (format) => `index.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@ark-ui/react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@ark-ui/react': 'ArkUI',
        },
        assetFileNames: 'style.css',
        // Optimize for treeshaking
        manualChunks: undefined,
        inlineDynamicImports: false,
        // Preserve modules for better treeshaking
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
      treeshake: {
        // Advanced treeshaking options
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
        unknownGlobalSideEffects: false,
      },
    },
    // Additional build optimizations
    minify: 'esbuild',
    sourcemap: true,
    cssCodeSplit: false,
    cssMinify: true,
    // Ensure no side effects
    modulePreload: {
      polyfill: false,
    },
    target: 'esnext',
    reportCompressedSize: true,
  },
});
