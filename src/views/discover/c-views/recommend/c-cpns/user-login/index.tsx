import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserLoginWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const UserLogin: FC<IProps> = () => {
  return (
    <UserLoginWrapper>
      <div className="info sprite_02">
        <p className="note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <a href="#" className="btn sprite_02">
          用户登录
        </a>
      </div>
    </UserLoginWrapper>
  )
}

export default memo(UserLogin)
