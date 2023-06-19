import React, { memo, useEffect } from 'react'
import { RecommendWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction, fetchHotRecommendsAction } from '@/store/modules/discover/recommend'
import type { FC, ReactNode } from 'react'
import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 发起action（获取数据）
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendsAction())
  }, [])

  // render函数返回的jsx
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
        </div>
        <div className="right"></div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
