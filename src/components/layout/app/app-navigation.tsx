import { bottomNavigation, NavigationItem } from '@lib/layout/navigation-data';
import { useRouter } from 'next/dist/client/router';
import { createElement, Fragment } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

const navigationClasses = (isActive?: boolean) => {
  return [
    'inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md',
    isActive ? 'text-blue-600 font-semibold' : 'text-gray-600',
    'hover:text-blue-600',
  ];
};

export default function AppNavigation() {
  const router = useRouter();

  const renderItem = (item: Pick<NavigationItem, 'icon' | 'name'>) => {
    return (
      <Fragment>
        {createElement(item.icon, {
          className: 'h-8 w-8',
          'aria-hidden': true,
        })}
        <span className='text-xs truncate'>{item.name}</span>
      </Fragment>
    );
  };

  return (
    <nav className='flex items-center justify-center fixed bottom-0 w-full h-16 px-2 bg-white shadow-sm z-40'>
      <div className='flex items-center justify-center w-full max-w-xl mx-auto'>
        <ul className='flex items-center justify-evenly w-full'>
          {bottomNavigation.map((item) => {
            const isActive = item.exact
              ? item.href === router.asPath
              : router.asPath.startsWith(item.href);

            return (
              <li key={item.name} className='relative'>
                <Link href={item.href}>
                  <a className={clsx(...navigationClasses(isActive))}>
                    {renderItem(item)}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
