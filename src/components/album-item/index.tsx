import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumItemWrapper } from './style'
import { getImageSize } from '@/utils/format'
import type { IArtist } from '@/types/discover/recommend'

interface IProps {
  children?: ReactNode
  itemData: IArtist
}

const AlbumItem: FC<IProps> = (props) => {
  const { itemData } = props

  // render函数
  return (
    <AlbumItemWrapper className="sprite_02">
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 100)} alt="" />
        <a title={itemData.name} href="#" className="cover cover-all"></a>
        <a href="#" className="play icon-all"></a>
      </div>
      <div className="bottom">
        <div className="name t">{itemData.name}</div>
        <div className="ar t">{itemData.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  )
}

export default memo(AlbumItem)
