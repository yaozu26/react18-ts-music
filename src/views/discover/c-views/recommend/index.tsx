import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import { useAppDispatch } from '@/store'
import {
  fetchAlbumNewestAction,
  fetchBannerDataAction,
  fetchHotRecommendsAction,
  fetchSingerDataAction,
  fetchTopRankingAction
} from '@/store/modules/discover/recommend'
import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import EnterSinger from './c-cpns/enter-singer'
import HotAchor from './c-cpns/hot-anchor'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 发起action（获取数据）
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendsAction())
    dispatch(fetchAlbumNewestAction())
    dispatch(fetchTopRankingAction())
    dispatch(fetchSingerDataAction())
  }, [])

  // render函数返回的jsx
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">
          <UserLogin />
          <EnterSinger />
          <HotAchor />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
