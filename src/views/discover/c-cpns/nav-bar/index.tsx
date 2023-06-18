import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { NavBarWrapper } from './style'
import { discoverMenu } from '@/assets/data/local_data'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const BavBar: React.FC<IProps> = () => {
  return (
    <NavBarWrapper>
      <div className="nav wrap-v1">
        <div className="top">
          {discoverMenu.map((item) => {
            return (
              <div className="item" key={item.link}>
                <NavLink className="" to={item.link}>
                  {item.title}
                </NavLink>
              </div>
            )
          })}
        </div>
      </div>
    </NavBarWrapper>
  )
}

export default memo(BavBar)
