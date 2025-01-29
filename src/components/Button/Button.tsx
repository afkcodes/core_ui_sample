// src/components/Button/Button.tsx
import { ark } from '@ark-ui/react';
import type { HTMLStyledProps } from '../../../styled-system/jsx';
import { styled } from '../../../styled-system/jsx';

// Define the variants interface
interface ButtonVariants {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
}

// Create the styled component
const StyledButton = styled(ark.button, {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'md',
    fontWeight: 'semibold',
    cursor: 'pointer',
    _disabled: {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
  variants: {
    size: {
      sm: { px: '3', py: '2', fontSize: 'sm' },
      md: { px: '4', py: '2', fontSize: 'md' },
      lg: { px: '5', py: '3', fontSize: 'lg' },
    },
    variant: {
      solid: {
        bg: 'primary',
        color: 'white',
        _hover: { bg: 'primary.dark' },
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'primary',
        color: 'primary',
        _hover: { bg: 'primary.light' },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid',
  },
});

// Export a clean type that combines HTML button props with our variants
export type ButtonProps = HTMLStyledProps<typeof StyledButton> & ButtonVariants;

// Export the button component
export const Button = StyledButton as React.FC<ButtonProps>;
