import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        {
          Object.values(routeConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={(
              <div className='page-wrapper'>
                {element}
              </div>
            )} />
          ))
        }
      </Routes>
    </Suspense>
  )
}
