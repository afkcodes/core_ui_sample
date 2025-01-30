// // src/components/Button/Button.tsx
// import { ark } from '@ark-ui/react';
// import type { HTMLStyledProps } from '../../../styled-system/jsx';
// import { styled } from '../../../styled-system/jsx';

// // Define the variants interface
// interface ButtonVariants {
//   size?: 'sm' | 'md' | 'lg';
//   variant?: 'solid' | 'outline';
// }

// // Create the styled component
// const StyledButton = styled(ark.button, {
//   base: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 'md',
//     fontWeight: 'semibold',
//     cursor: 'pointer',
//     _disabled: {
//       cursor: 'not-allowed',
//       opacity: 0.5,
//     },
//   },
//   variants: {
//     size: {
//       sm: { px: '3', py: '2', fontSize: 'sm' },
//       md: { px: '4', py: '2', fontSize: 'md' },
//       lg: { px: '5', py: '3', fontSize: 'lg' },
//     },
//     variant: {
//       solid: {
//         bg: 'primary',
//         color: 'white',
//         _hover: { bg: 'primary.dark' },
//       },
//       outline: {
//         borderWidth: '1px',
//         borderColor: 'primary',
//         color: 'primary',
//         _hover: { bg: 'primary.light' },
//       },
//     },
//   },
//   defaultVariants: {
//     size: 'md',
//     variant: 'solid',
//   },
// });

// // Export a clean type that combines HTML button props with our variants
// export type ButtonProps = HTMLStyledProps<typeof StyledButton> & ButtonVariants;

// // Export the button component
// export const Button = StyledButton as React.FC<ButtonProps>;

// // src/components/Button/Button.tsx
// import { ark } from '@ark-ui/react';
// import * as React from 'react';
// import type { ButtonVariantProps } from '../../../styled-system/recipes';
// import { button } from '../../../styled-system/recipes';

// export interface ButtonProps
//   extends ButtonVariantProps,
//     Omit<React.ComponentPropsWithRef<typeof ark.button>, keyof ButtonVariantProps> {
//   leftIcon?: React.ReactNode;
//   rightIcon?: React.ReactNode;
// }

// export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ variant, size, leftIcon, rightIcon, children, ...props }, ref) => {
//     return (
//       <ark.button ref={ref} className={button({ variant, size })} {...props}>
//         {leftIcon && <span>{leftIcon}</span>}
//         {children}
//         {rightIcon && <span>{rightIcon}</span>}
//       </ark.button>
//     );
//   }
// );

// Button.displayName = 'Button';

// src/components/Button/Button.tsx
import { ark } from '@ark-ui/react';
import * as React from 'react';
import type { ButtonVariantProps } from '../../../styled-system/recipes';
import { button } from '../../../styled-system/recipes';

export interface ButtonProps
  extends ButtonVariantProps,
    Omit<React.ComponentPropsWithRef<typeof ark.button>, keyof ButtonVariantProps> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <ark.button ref={ref} className={button({ variant, size })} {...props}>
        {leftIcon && <span>{leftIcon}</span>}
        {children}
        {rightIcon && <span>{rightIcon}</span>}
      </ark.button>
    );
  }
);

Button.displayName = 'Button';
