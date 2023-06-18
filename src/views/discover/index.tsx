import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Discover: React.FC<IProps> = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default memo(Discover)
