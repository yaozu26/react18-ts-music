import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { AppHeaderWrapper, HeaderLeft, HeaderRight } from './style'
import headerTitles from '@/assets/data/header-title.json'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AppHeader: React.FC<IProps> = () => {
  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? 'active' : ''
          }}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }

  return (
    <AppHeaderWrapper>
      <div className="header wrap-v1">
        <HeaderLeft>
          <div className="logo sprite_01">网易云音乐</div>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>

        <HeaderRight>
          <Input className="search sprite_01" placeholder="音乐/视频/电台/用户" />
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  )
}

export default memo(AppHeader)
