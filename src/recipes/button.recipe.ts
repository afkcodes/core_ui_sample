import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'A button component that can be used to trigger an action',
  jsx: ['Button'],
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    height: 'auto',
    borderRadius: 'md',
    fontWeight: 'semibold',
    cursor: 'pointer',
    transition: 'all 0.2s',
    position: 'relative',
    _disabled: {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
    _focus: {
      outline: '2px solid token(colors.primary)',
      outlineOffset: '2px',
    },
  },
  variants: {
    variant: {
      solid: {
        bg: 'primary.500',
        color: 'white',
        _hover: {
          bg: 'primary.600',
        },
        _active: {
          bg: 'primary.700',
        },
      },
      outline: {
        border: '1px solid',
        borderColor: 'primary.500',
        color: 'primary.500',
        bg: 'transparent',
        _hover: {
          bg: 'primary.50',
        },
        _active: {
          bg: 'primary.100',
        },
      },
      ghost: {
        bg: 'transparent',
        color: 'primary.500',
        _hover: {
          bg: 'primary.50',
        },
        _active: {
          bg: 'primary.100',
        },
      },
    },
    size: {
      sm: {
        h: '8',
        minW: '8',
        fontSize: 'sm',
        px: '3',
        py: '2',
      },
      md: {
        h: '10',
        minW: '10',
        fontSize: 'md',
        px: '4',
        py: '2',
      },
      lg: {
        h: '12',
        minW: '12',
        fontSize: 'lg',
        px: '6',
        py: '3',
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
});
