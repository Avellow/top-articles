import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';

import './styles/index.scss';
import { Suspense } from 'react';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', { hovered: true, select: false }, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>

    </div>
  )
}
