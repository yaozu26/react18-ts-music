import React, { memo, useRef } from 'react'
import { Carousel } from 'antd'
import type { FC, ReactNode, ElementRef } from 'react'
import { NewAlbumWrapper } from './style'
import { useAppSelector, shallowEqual } from '@/store'
import { _throttle } from '@/utils/throttle'
import AreaHeaderV1 from '@/components/area-header-v1'
import AlbumItem from '@/components/album-item'

// 轮播图动画的执行时间和节流函数的执行时间间隔
const WAIT_TIME = 2000

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  // 获取数据
  const { albumNewestData } = useAppSelector(
    (state) => ({
      albumNewestData: state.recommend.albumNewestData
    }),
    shallowEqual
  )

  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)

  // 轮播图切换事件
  const handlePrevClick = _throttle(() => carouselRef.current?.prev(), WAIT_TIME, true, false)
  const handleNextClick = _throttle(() => carouselRef.current?.next(), WAIT_TIME, true, false)

  // render函数
  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 titleText="新碟上架" moreLink="/discover/album" />

      <div className="content">
        {/* 控制器1 */}
        <button className="sprite_02 arrow arrow-left" onClick={handlePrevClick}></button>

        {/* 轮播图 */}
        <div className="banner">
          <Carousel ref={carouselRef} speed={WAIT_TIME} dots={false}>
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index}>
                <div className="album-list">
                  {albumNewestData.slice(index * 5, (index + 1) * 5).map((album) => (
                    <AlbumItem key={album.id} itemData={album} />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* 控制器2 */}
        <button className="sprite_02 arrow arrow-right" onClick={handleNextClick}></button>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
