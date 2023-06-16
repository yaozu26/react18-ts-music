import React, { memo } from 'react'
import { Link, Outlet } from 'react-router-dom'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Discover: React.FC<IProps> = (props) => {
  return (
    <div>
      <Link to="/discover/recommend">推荐</Link>
      <Link to="/discover/ranking">排行榜</Link>
      <Link to="/discover/songs">歌单</Link>
      <Link to="/discover/djradio">主播电台</Link>
      <Link to="/discover/singer">歌手</Link>
      <Link to="/discover/album">新碟上架</Link>
      <Outlet />
    </div>
  )
}

export default memo(Discover)
