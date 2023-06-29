import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongItemV1Wrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/store/modules/player/player'

interface IProps {
  children?: ReactNode
  itemData: any
  index: number
}

const SongItemV1: FC<IProps> = (props) => {
  const { itemData, index } = props

  const dispatch = useAppDispatch()

  function handlePlayMusicClick() {
    dispatch(fetchCurrentSongAction(itemData.id))
  }

  // render函数
  return (
    <SongItemV1Wrapper>
      <div className="order">{index + 1}</div>
      <div className="name">{itemData.name}</div>
      <div className="right">
        <button className="btn play sprite_02" onClick={handlePlayMusicClick}></button>
        <button className="btn add icon-all_02"></button>
        <button className="btn favor sprite_02"></button>
      </div>
    </SongItemV1Wrapper>
  )
}

export default memo(SongItemV1)
