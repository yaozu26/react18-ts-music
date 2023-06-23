import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { EnterSingerWrapper } from './style'
import { shallowEqual, useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'
import AreaHeaderV2 from '@/components/area-header-v2'

interface IProps {
  children?: ReactNode
}

const EnterSinger: FC<IProps> = () => {
  const { singerData } = useAppSelector(
    (state) => ({
      singerData: state.recommend.singerData
    }),
    shallowEqual
  )

  // render函数
  return (
    <EnterSingerWrapper>
      <AreaHeaderV2 titleText="入驻歌手" moreText="查看全部>" moreLink="/discover/singer" />

      {/* 入驻歌手 */}
      <div className="singer-list">
        {singerData.map((item) => (
          <a className="singer-item" key={item.id}>
            <div className="head">
              <img src={getImageSize(item.img1v1Url, 62)} alt="" />
            </div>
            <div className="info">
              <h4 className="name">{item.name}</h4>
              <div className="alias">{item.alias}</div>
            </div>
          </a>
        ))}
      </div>

      {/* 底部区域 */}
      <div className="bot but-all_02">
        <a href="#" className="btn but-all_02">
          申请成为网易音乐人
        </a>
      </div>
    </EnterSingerWrapper>
  )
}

export default memo(EnterSinger)
