import React, { Suspense, useEffect } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'

import { getBannerData } from './service/modules/test'

function App() {
  useEffect(() => {
    getBannerData().then((res) => {
      console.log(res)
    })
  })

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/friend">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>

      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
