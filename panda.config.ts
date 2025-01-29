// panda.config.ts
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Write css to this directory
  outdir: 'styled-system',

  // Clean generated code directory before build
  clean: true,

  // Files to scan for tokens and recipes
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],

  // Enable JSX support
  jsxFramework: 'react',

  // Enable hash for better tree-shaking and CSS isolation
  hash: true,

  // Define your theme
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#3182CE' },
          secondary: { value: '#718096' },
          success: { value: '#38A169' },
          error: { value: '#E53E3E' },
          warning: { value: '#D69E2E' },

          // Gray scale
          gray: {
            50: { value: '#F7FAFC' },
            100: { value: '#EDF2F7' },
            200: { value: '#E2E8F0' },
            300: { value: '#CBD5E0' },
            400: { value: '#A0AEC0' },
            500: { value: '#718096' },
            600: { value: '#4A5568' },
            700: { value: '#2D3748' },
            800: { value: '#1A202C' },
            900: { value: '#171923' },
          },
        },
        spacing: {
          0: { value: '0' },
          1: { value: '0.25rem' },
          2: { value: '0.5rem' },
          3: { value: '0.75rem' },
          4: { value: '1rem' },
          5: { value: '1.25rem' },
          6: { value: '1.5rem' },
          8: { value: '2rem' },
          10: { value: '2.5rem' },
          12: { value: '3rem' },
          16: { value: '4rem' },
        },
        sizes: {
          xs: { value: '20rem' },
          sm: { value: '24rem' },
          md: { value: '28rem' },
          lg: { value: '32rem' },
          xl: { value: '36rem' },
          '2xl': { value: '42rem' },
          '3xl': { value: '48rem' },
          '4xl': { value: '56rem' },
          '5xl': { value: '64rem' },
          '6xl': { value: '72rem' },
        },
        radii: {
          none: { value: '0' },
          sm: { value: '0.125rem' },
          base: { value: '0.25rem' },
          md: { value: '0.375rem' },
          lg: { value: '0.5rem' },
          xl: { value: '0.75rem' },
          '2xl': { value: '1rem' },
          full: { value: '9999px' },
        },
        fontSizes: {
          xs: { value: '0.75rem' },
          sm: { value: '0.875rem' },
          base: { value: '1rem' },
          lg: { value: '1.125rem' },
          xl: { value: '1.25rem' },
          '2xl': { value: '1.5rem' },
          '3xl': { value: '1.875rem' },
          '4xl': { value: '2.25rem' },
          '5xl': { value: '3rem' },
        },
        fonts: {
          body: { value: 'system-ui, -apple-system, sans-serif' },
          heading: { value: 'system-ui, -apple-system, sans-serif' },
          mono: { value: 'SFMono-Regular, Menlo, Monaco, Consolas, monospace' },
        },
        fontWeights: {
          normal: { value: '400' },
          medium: { value: '500' },
          semibold: { value: '600' },
          bold: { value: '700' },
        },
        lineHeights: {
          none: { value: '1' },
          tight: { value: '1.25' },
          base: { value: '1.5' },
          loose: { value: '2' },
        },
        letterSpacings: {
          tighter: { value: '-0.05em' },
          tight: { value: '-0.025em' },
          normal: { value: '0' },
          wide: { value: '0.025em' },
          wider: { value: '0.05em' },
          widest: { value: '0.1em' },
        },
      },
      semanticTokens: {
        colors: {
          // You can reference other tokens here
          background: { value: '{colors.gray.50}' },
          foreground: { value: '{colors.gray.900}' },
        },
      },
      // recipes: {
      //   button: {
      //     description: 'A button component',
      //     base: {
      //       display: 'inline-flex',
      //       alignItems: 'center',
      //       justifyContent: 'center',
      //       borderRadius: 'md',
      //       fontWeight: 'semibold',
      //       cursor: 'pointer',
      //       transition: 'all 0.2s',
      //       _disabled: {
      //         cursor: 'not-allowed',
      //         opacity: 0.5,
      //       },
      //     },
      //     variants: {
      //       size: {
      //         sm: { px: '3', py: '2', fontSize: 'sm' },
      //         md: { px: '4', py: '2', fontSize: 'base' },
      //         lg: { px: '5', py: '3', fontSize: 'lg' },
      //       },
      //       variant: {
      //         solid: {
      //           bg: 'primary',
      //           color: 'white',
      //           _hover: { opacity: 0.9 },
      //         },
      //         outline: {
      //           borderWidth: '1px',
      //           borderColor: 'primary',
      //           color: 'primary',
      //           _hover: { bg: 'primary', color: 'white' },
      //         },
      //         ghost: {
      //           color: 'primary',
      //           _hover: { bg: 'gray.100' },
      //         },
      //       },
      //     },
      //     defaultVariants: {
      //       size: 'md',
      //       variant: 'solid',
      //     },
      //   },
      // },
    },
  },

  // Define your patterns/recipes
  patterns: {
    extend: {
      // Layout patterns
      container: {
        transform(props) {
          return {
            maxWidth: props.size ?? '60rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: props.padding ?? '1rem',
            paddingRight: props.padding ?? '1rem',
          };
        },
      },
      flex: {
        transform(props) {
          return {
            display: 'flex',
            flexDirection: props.direction ?? 'row',
            alignItems: props.align ?? 'stretch',
            justifyContent: props.justify ?? 'flex-start',
            gap: props.gap ?? '0',
          };
        },
      },
    },
  },

  // Configuration for CSS generation
  utilities: {
    extend: {
      // Add custom utilities here
    },
  },

  conditions: {
    extend: {
      // Add custom conditions here
      hoverFocus: '&:hover, &:focus',
    },
  },

  // Enable CSS reset
  preflight: true,
});
