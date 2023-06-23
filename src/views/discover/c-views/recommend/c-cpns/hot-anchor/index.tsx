import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotAnchorWrapper } from './style'
import hotAnchor from '@/assets/data/hot-anchor.json'
import { getImageSize } from '@/utils/format'
import AreaHeaderV2 from '@/components/area-header-v2'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = () => {
  return (
    <HotAnchorWrapper>
      <AreaHeaderV2 titleText="热门主播" />
      <div className="hot-anchor">
        {hotAnchor.map((item) => (
          <Link to={item.url} className="item" key={item.url}>
            <div className="cover">
              <img src={getImageSize(item.picUrl, 40)} alt="" />
            </div>
            <div className="right">
              <div className="name">{item.name}</div>
              <div className="desc">{item.position}</div>
            </div>
          </Link>
        ))}
      </div>
    </HotAnchorWrapper>
  )
}

export default memo(HotAnchor)
