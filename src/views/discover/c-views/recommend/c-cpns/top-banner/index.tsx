import React, { memo, useCallback, useRef, useState } from 'react'
import { Carousel } from 'antd'
import { Link } from 'react-router-dom'
import { TopBannerWrapper, BannerLeft, BannerRight, BannerControll } from './style'
import { useAppSelector, shallowEqual } from '@/store'
import type { FC, ReactNode, ElementRef } from 'react'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // 获取数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  // 走马灯逻辑
  const onCarouselBeforechange = useCallback((from: number, to: number) => {
    setCurrentIndex(to)
  }, [])

  function handlePrevClick() {
    carouselRef.current?.prev()
  }
  function handleNextClick() {
    carouselRef.current?.next()
  }

  // 指示器
  const onDotClick = (index: number) => {
    carouselRef.current?.goTo(index)
  }

  // 背景图片
  const bgImgUrl =
    currentIndex >= 0 && banners.length > 0
      ? banners[currentIndex].imageUrl + '?imageView&blur=40x20'
      : ''

  // render函数
  return (
    <TopBannerWrapper style={{ background: `url('${bgImgUrl}') center center / 6000px` }}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel ref={carouselRef} dots={false} beforeChange={onCarouselBeforechange} autoplay>
            {banners.map((item) => {
              return (
                <a href="#" key={item.imageUrl}>
                  <img src={item.imageUrl} alt={item.typeTitle} />
                </a>
              )
            })}
          </Carousel>
          {/* 轮播图指示器 */}
          <ul className="dots">
            {banners.map((item, index) => (
              <li key={item.imageUrl}>
                <span
                  className={classNames('item', { active: index === currentIndex })}
                  onClick={() => onDotClick(index)}
                ></span>
              </li>
            ))}
          </ul>
        </BannerLeft>
        <BannerRight>
          <Link to="/download" />
        </BannerRight>
        <BannerControll>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControll>
      </div>
    </TopBannerWrapper>
  )
}

export default memo(TopBanner)
