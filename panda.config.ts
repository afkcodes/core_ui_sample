// // panda.config.ts
// import { defineConfig } from '@pandacss/dev';
// import { buttonRecipe } from './src/recipes/';

// export default defineConfig({
//   // Write css to this directory
//   outdir: 'styled-system',

//   // Clean generated code directory before build
//   clean: true,

//   // Files to scan for tokens and recipes
//   include: ['./src/**/*.{js,jsx,ts,tsx}'],
//   exclude: [],

//   // Enable JSX support
//   jsxFramework: 'react',

//   // Enable hash for better tree-shaking and CSS isolation
//   hash: true,

//   // Define your theme
//   theme: {
//     extend: {
//       tokens: {
//         colors: {
//           primary: {
//             light: { value: '#E9D8FD' },
//             DEFAULT: { value: '#805AD5' },
//             dark: { value: '#553C9A' },
//             darker: { value: '#44337A' },
//           },
//           secondary: { value: '#718096' },
//           success: { value: '#38A169' },
//           error: { value: '#E53E3E' },
//           warning: { value: '#D69E2E' },

//           // Gray scale
//           gray: {
//             50: { value: '#F7FAFC' },
//             100: { value: '#EDF2F7' },
//             200: { value: '#E2E8F0' },
//             300: { value: '#CBD5E0' },
//             400: { value: '#A0AEC0' },
//             500: { value: '#718096' },
//             600: { value: '#4A5568' },
//             700: { value: '#2D3748' },
//             800: { value: '#1A202C' },
//             900: { value: '#171923' },
//           },
//         },
//         animations: {
//           spin: {
//             value: 'spin 1s linear infinite',
//           },
//         },
//         spacing: {
//           0: { value: '0' },
//           1: { value: '0.25rem' },
//           2: { value: '0.5rem' },
//           3: { value: '0.75rem' },
//           4: { value: '1rem' },
//           5: { value: '1.25rem' },
//           6: { value: '1.5rem' },
//           8: { value: '2rem' },
//           10: { value: '2.5rem' },
//           12: { value: '3rem' },
//           16: { value: '4rem' },
//         },
//         sizes: {
//           xs: { value: '20rem' },
//           sm: { value: '24rem' },
//           md: { value: '28rem' },
//           lg: { value: '32rem' },
//           xl: { value: '36rem' },
//           '2xl': { value: '42rem' },
//           '3xl': { value: '48rem' },
//           '4xl': { value: '56rem' },
//           '5xl': { value: '64rem' },
//           '6xl': { value: '72rem' },
//         },
//         radii: {
//           none: { value: '0' },
//           sm: { value: '0.125rem' },
//           base: { value: '0.25rem' },
//           md: { value: '0.375rem' },
//           lg: { value: '0.5rem' },
//           xl: { value: '0.75rem' },
//           '2xl': { value: '1rem' },
//           full: { value: '9999px' },
//         },
//         fontSizes: {
//           xs: { value: '0.75rem' },
//           sm: { value: '0.875rem' },
//           base: { value: '1rem' },
//           lg: { value: '1.125rem' },
//           xl: { value: '1.25rem' },
//           '2xl': { value: '1.5rem' },
//           '3xl': { value: '1.875rem' },
//           '4xl': { value: '2.25rem' },
//           '5xl': { value: '3rem' },
//         },
//         fonts: {
//           body: { value: 'system-ui, -apple-system, sans-serif' },
//           heading: { value: 'system-ui, -apple-system, sans-serif' },
//           mono: { value: 'SFMono-Regular, Menlo, Monaco, Consolas, monospace' },
//         },
//         fontWeights: {
//           normal: { value: '400' },
//           medium: { value: '500' },
//           semibold: { value: '600' },
//           bold: { value: '700' },
//         },
//         lineHeights: {
//           none: { value: '1' },
//           tight: { value: '1.25' },
//           base: { value: '1.5' },
//           loose: { value: '2' },
//         },
//         letterSpacings: {
//           tighter: { value: '-0.05em' },
//           tight: { value: '-0.025em' },
//           normal: { value: '0' },
//           wide: { value: '0.025em' },
//           wider: { value: '0.05em' },
//           widest: { value: '0.1em' },
//         },
//       },
//       semanticTokens: {
//         colors: {
//           background: { value: '{colors.gray.50}' },
//           foreground: { value: '{colors.gray.900}' },
//         },
//       },
//       keyframes: {
//         spin: {
//           '0%': { transform: 'rotate(0deg)' },
//           '100%': { transform: 'rotate(360deg)' },
//         },
//       },
//     },
//     recipes: { button: buttonRecipe },
//   },

//   // // Define your patterns/recipes
//   // patterns: {
//   //   extend: {
//   //     // Layout patterns
//   //     container: {
//   //       transform(props) {
//   //         return {
//   //           maxWidth: props.size ?? '60rem',
//   //           marginLeft: 'auto',
//   //           marginRight: 'auto',
//   //           paddingLeft: props.padding ?? '1rem',
//   //           paddingRight: props.padding ?? '1rem',
//   //         };
//   //       },
//   //     },
//   //     flex: {
//   //       transform(props) {
//   //         return {
//   //           display: 'flex',
//   //           flexDirection: props.direction ?? 'row',
//   //           alignItems: props.align ?? 'stretch',
//   //           justifyContent: props.justify ?? 'flex-start',
//   //           gap: props.gap ?? '0',
//   //         };
//   //       },
//   //     },
//   //   },
//   // },

//   // // Configuration for CSS generation
//   // utilities: {
//   //   extend: {
//   //     // Add custom utilities here
//   //   },
//   // },

//   // conditions: {
//   //   extend: {
//   //     // Add custom conditions here
//   //     hoverFocus: '&:hover, &:focus',
//   //   },
//   // },

//   // Enable CSS reset
//   preflight: true,
// });

// panda.config.ts
// import { defineConfig } from '@pandacss/dev';
// import { buttonRecipe } from './src/recipes/button.recipe';

// export default defineConfig({
//   preflight: true,
//   include: ['./src/**/*.{js,jsx,ts,tsx}'],
//   exclude: [],
//   theme: {
//     extend: {
//       tokens: {
//         colors: {
//           primary: {
//             50: { value: '#F0F2FF' },
//             100: { value: '#DEE1FE' },
//             200: { value: '#BFC4FC' },
//             300: { value: '#9EA3FA' },
//             400: { value: '#7D82F8' },
//             500: { value: '#5C63F6' },
//             600: { value: '#4A52D0' },
//             700: { value: '#4A52D0' },
//             800: { value: '#262A84' },
//             900: { value: '#131549' },
//           },
//         },
//         sizes: {
//           '8': { value: '2rem' },
//           '10': { value: '2.5rem' },
//           '12': { value: '3rem' },
//         },
//         spacing: {
//           '2': { value: '0.5rem' },
//           '3': { value: '0.75rem' },
//           '4': { value: '1rem' },
//           '6': { value: '1.5rem' },
//         },
//         radii: {
//           md: { value: '0.375rem' },
//         },
//         fontSizes: {
//           sm: { value: '0.875rem' },
//           md: { value: '1rem' },
//           lg: { value: '1.125rem' },
//         },
//       },
//     },
//     recipes: {
//       button: buttonRecipe,
//     },
//   },
//   staticCss: {
//     css: [],
//     recipes: {},
//   },
//   outdir: 'styled-system',
//   jsxFramework: 'react',
//   clean: true,
// });

// panda.config.ts
import { defineConfig } from '@pandacss/dev';
import { buttonRecipe } from './src/recipes/button.recipe';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  conditions: {
    extend: {
      defaultDensity: '[data-density=default] &',
      compactDensity: '[data-density=compact] &',
    },
  },
  theme: {
    extend: {
      semanticTokens: {
        spacing: {
          // Button paddings
          'button-x-sm': {
            value: {
              _defaultDensity: '0.75rem', // 3
              _compactDensity: '0.5rem', // 2
            },
          },
          'button-x-md': {
            value: {
              _defaultDensity: '1rem', // 4
              _compactDensity: '0.75rem', // 3
            },
          },
          'button-x-lg': {
            value: {
              _defaultDensity: '1.5rem', // 6
              _compactDensity: '1rem', // 4
            },
          },
          'button-y-sm': {
            value: {
              _defaultDensity: '0.5rem', // 2
              _compactDensity: '0.25rem', // 1
            },
          },
          'button-y-md': {
            value: {
              _defaultDensity: '0.5rem', // 2
              _compactDensity: '0.375rem', // 1.5
            },
          },
          'button-y-lg': {
            value: {
              _defaultDensity: '0.75rem', // 3
              _compactDensity: '0.5rem', // 2
            },
          },
          // Button gaps
          'button-gap-sm': {
            value: {
              _defaultDensity: '0.5rem', // 2
              _compactDensity: '0.25rem', // 1
            },
          },
          'button-gap-md': {
            value: {
              _defaultDensity: '0.5rem', // 2
              _compactDensity: '0.375rem', // 1.5
            },
          },
          'button-gap-lg': {
            value: {
              _defaultDensity: '0.75rem', // 3
              _compactDensity: '0.5rem', // 2
            },
          },
        },
        sizes: {
          'button-min-w-sm': {
            value: {
              _defaultDensity: '2rem', // 8
              _compactDensity: '1.75rem', // 7
            },
          },
          'button-min-w-md': {
            value: {
              _defaultDensity: '2.5rem', // 10
              _compactDensity: '2.25rem', // 9
            },
          },
          'button-min-w-lg': {
            value: {
              _defaultDensity: '3rem', // 12
              _compactDensity: '2.75rem', // 11
            },
          },
        },
      },
      tokens: {
        colors: {
          primary: {
            50: { value: '#F0F2FF' },
            100: { value: '#DEE1FE' },
            200: { value: '#BFC4FC' },
            300: { value: '#9EA3FA' },
            400: { value: '#7D82F8' },
            500: { value: '#5C63F6' },
            600: { value: '#4A52D0' },
            700: { value: '#4A52D0' },
            800: { value: '#262A84' },
            900: { value: '#131549' },
          },
        },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },

  staticCss: {
    css: [],
    recipes: {},
  },
  outdir: 'styled-system',
  jsxFramework: 'react',
});
