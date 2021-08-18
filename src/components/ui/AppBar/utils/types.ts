import { BaseColors } from '../../types';

export type AppBarSize = 'lg' | 'sm';
export type AppBarShadow = 'lg' | 'md' | 'sm';

interface AppBarBaseProps {
  title?: string;
  className?: string;
  back?: boolean;
  shadow?: AppBarShadow;
  size?: AppBarSize;
  color?: BaseColors;
  rightIcon?: React.ElementType | 'string';
  leftIcon?: React.ElementType | 'string';
  component?: React.ElementType | 'string';
}

export type AppBarProps = AppBarBaseProps &
  React.HTMLAttributes<HTMLDivElement | HTMLSpanElement>;
