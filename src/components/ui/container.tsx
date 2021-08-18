import React from 'react';
import clsx from 'clsx';

type ContainerProps = React.ComponentProps<'div'>;

const containerClass = 'container w-full sm:max-w-xl mx-auto px-4';

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div className={clsx(containerClass, className)} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container;
