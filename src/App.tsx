import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './views/player/app-player-bar'
import { useAppDispatch } from './store'
import { fetchCurrentSongAction } from './store/modules/player/player'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(2057534370))
  }, [])

  // render函数
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <AppPlayerBar />
    </div>
  )
}

export default App
