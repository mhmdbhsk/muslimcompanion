import { AccountIcon, HeartIcon, HelpIcon, HomeIcon } from '@assets/icons';
import { ComponentProps, ComponentType } from 'react';

export interface NavigationItem {
  name: string;
  icon: ComponentType<ComponentProps<'svg'>>;
  href: string;
  exact?: boolean;
}

export type MenuItem = Omit<NavigationItem, 'icon'>;

export const bottomNavigation: NavigationItem[] = [
  {
    name: 'Beranda',
    icon: HomeIcon,
    href: '/',
    exact: true,
  },
  {
    name: 'Favorit',
    icon: HeartIcon,
    href: '/favourite',
  },
  {
    name: 'Bantuan',
    icon: HelpIcon,
    href: '/help',
  },
  {
    name: 'Akun',
    icon: AccountIcon,
    href: '/account',
  },
];

export const navMenu: MenuItem[] = [
  {
    name: 'Al-Quran',
    href: '/quran',
    exact: true,
  },
  {
    name: 'Hadist',
    href: '/hadist',
    exact: true,
  },
  {
    name: 'Sholat',
    href: '/sholat',
    exact: true,
  },
  {
    name: 'Dzikir',
    href: '/dzikir',
    exact: true,
  },
  {
    name: 'Kajian',
    href: '/kajian',
    exact: true,
  },
];
