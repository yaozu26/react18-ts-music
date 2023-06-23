import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import TopRankingItem from '../top-ranking-item'
import { shallowEqual, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { topRankingData } = useAppSelector(
    (state) => ({
      topRankingData: state.recommend.topRankingData
    }),
    shallowEqual
  )

  return (
    <TopRankingWrapper>
      <AreaHeaderV1 titleText="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {topRankingData.map((item) => (
          <TopRankingItem key={item.id} itemData={item} />
        ))}
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
