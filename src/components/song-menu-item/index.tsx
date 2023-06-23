import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import RootWrapper from './style'
import { formatCount, getImageSize } from '@/utils/format'
import { IPersonalized } from '@/types/discover/recommend'

interface IProps {
  children?: ReactNode
  itemData: IPersonalized
}
const SongMenuItem: FC<IProps> = memo((props: IProps) => {
  const { itemData } = props

  return (
    <RootWrapper>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 140)} alt="" />
        <div className="cover cover-all">
          <div className="info cover-all">
            <span>
              <i className="icon-all headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="icon-all play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </RootWrapper>
  )
})

SongMenuItem.displayName = 'SongMenuItem'

export default SongMenuItem
