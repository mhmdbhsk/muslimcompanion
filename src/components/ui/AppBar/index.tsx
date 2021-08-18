import React from 'react';
import clsx from 'clsx';

import {
  appBarAccentStyles,
  AppBarProps,
  appBarShadowStyles,
  appBarSizeStyles,
} from './utils';

const AppBar = React.forwardRef<HTMLDivElement, AppBarProps>(
  ({ className, shadow, size, color, title, ...rest }, ref) => {
    return (
      <div
        className={clsx(
          appBarAccentStyles(color),
          appBarShadowStyles(shadow),
          appBarSizeStyles(size),
          className
        )}
        ref={ref}
        {...rest}
      >
        {title}
      </div>
    );
  }
);

AppBar.displayName = 'AppBar';

export default AppBar;
