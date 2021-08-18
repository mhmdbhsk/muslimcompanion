import AppHeader from './app/app-header';
import AppNavigation from './app/app-navigation';

export const MainLayout: React.FC = ({ children }) => (
  <main className='flex flex-col w-full min-h-screen bg-gray-100'>
    <AppHeader />
    {children}
    <AppNavigation />
  </main>
);
