import { BaseColors } from '../../types';
import { AppBarSize, AppBarShadow } from './types';

export function appBarShadowStyles(shadow?: AppBarShadow) {
  switch (shadow) {
    case 'sm':
      return 'shadow';
    case 'md':
      return 'shadow-md';
    case 'lg':
      return 'shadow-lg';
    default:
      return 'shadow';
  }
}

export function appBarSizeStyles(size?: AppBarSize) {
  switch (size) {
    case 'sm':
      return 'h-12 w-full';
    case 'lg':
      return 'h-16 w-full';
    default:
      return 'h-12 w-full';
  }
}

export function appBarAccentStyles(color?: BaseColors) {
  switch (color) {
    case 'blue': {
      return 'text-blue-800';
    }
    case 'green': {
      return 'text-green-800';
    }
    case 'indigo': {
      return 'text-indigo-800';
    }
    case 'pink': {
      return 'text-pink-800';
    }
    case 'purple': {
      return 'text-purple-800';
    }
    case 'red': {
      return 'text-red-800';
    }
    default: {
      return 'text-black-800';
    }
  }
}
