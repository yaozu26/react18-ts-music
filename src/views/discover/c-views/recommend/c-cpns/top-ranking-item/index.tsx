import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankingItemWrapper } from './style'
import { getImageSize } from '@/utils/format'
import SongItemV1 from '@/components/song-item-v1'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  itemData: any
}

const TopRanking: FC<IProps> = (props) => {
  const { itemData } = props

  // render函数
  return (
    <TopRankingItemWrapper>
      <div className="inner">
        <div className="top">
          <div className="cover">
            <img src={getImageSize(itemData.coverImgUrl, 80)} alt="" />
          </div>
          <div className="tit">
            <h3 className="name">{itemData.name}</h3>
            <div className="btns">
              <button className="sprite_02 btn play"></button>
              <button className="sprite_02 btn favor"></button>
            </div>
          </div>
        </div>

        <div className="song-list">
          {itemData.tracks.slice(0, 10).map((item: any, index: number) => (
            <SongItemV1 key={item.id} itemData={item} index={index} />
          ))}
        </div>

        <div className="more">
          <Link to="/discover/ranking">查看更多&gt;</Link>
        </div>
      </div>
    </TopRankingItemWrapper>
  )
}

export default memo(TopRanking)
