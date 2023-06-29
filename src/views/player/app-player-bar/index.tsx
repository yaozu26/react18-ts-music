import React, { memo, useEffect, useRef, useState } from 'react'
import { Slider, message } from 'antd'
import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import {
  AppPlayerWrapper,
  BtnsWrapper,
  HeadWrapper,
  PlayWrapper,
  OperationWrapper,
  PlayModeWrapper
} from './style'
import { shallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { formatMillisecondToMinute, getImageSize, getSongPlayUrl } from '@/utils/format'
import {
  changeLyricIndexAction,
  changePlayModeAction,
  fetchChangeMusicAction
} from '@/store/modules/player/player'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isChanging, setIschanging] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)

  // 从store获取数据
  const { currentSong, currentLyric, lyricIndex, playMode } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      currentLyric: state.player.currentLyric,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode
    }),
    shallowEqual
  )
  const dispatch = useAppDispatch()

  // 操作audio标签的逻辑
  useEffect(() => {
    if (!audioRef.current) return

    audioRef.current.src = getSongPlayUrl(currentSong?.id)
    audioRef.current
      .play()
      .then(() => {
        setPlaying(true)
      })
      .catch((err) => {
        setPlaying(false)
        console.log('歌曲播放失败：', err)
      })

    setDuration(currentSong?.dt)
  }, [currentSong])

  // 控制音乐播放
  function handleChangePlayingClick() {
    setPlaying(!playing)
    // 猜测：playing的值已经改变了，但是由于react的机制需要在DOM
    !playing ? audioRef.current?.play() : audioRef.current?.pause()
  }

  // 切换音乐播放模式
  function handlePlayModeClick(e: any) {
    e.preventDefault()

    let newPlayMode = playMode + 1

    if (newPlayMode > 2) newPlayMode = 0
    dispatch(changePlayModeAction(newPlayMode))
  }

  // 上一首、下一首
  function handleMusicChange(isNext: boolean) {
    dispatch(fetchChangeMusicAction(isNext))
  }

  // 监听音乐的播放进度
  function handleCurrentTimeUpdate() {
    if (!audioRef.current) return
    const currentTime = audioRef.current.currentTime * 1000

    // 计算歌曲进度
    if (!isChanging) {
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }

    // 计算歌词进度
    let index = currentLyric.length - 1
    for (let i = 0; i < currentLyric.length; i++) {
      const lyric = currentLyric[i]
      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }

    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricIndexAction(index))

    // 展示歌词
    message.open({
      content: currentLyric[index]?.text,
      key: 'lyric',
      duration: 0
    })
  }

  // 音乐播放结束
  function handleAudioEnd() {
    if (playMode === 2) {
      audioRef.current?.play()
    } else {
      dispatch(fetchChangeMusicAction(true))
    }
  }

  // 进度条滑动的逻辑
  function handleSliderChange(value: number) {
    setIschanging(true)

    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
    setProgress(value)
  }

  // 点击进度条切换进度
  function hanldeSliderClick(value: number) {
    if (!audioRef.current) return

    const currentTime = (value / 100) * duration

    audioRef.current.currentTime = currentTime / 1000

    setCurrentTime(currentTime)
    setProgress(value)
    setIschanging(false)
  }

  // render函数
  return (
    <AppPlayerWrapper>
      <div className="end-l player-bar">
        <a href="#" className="btn player-bar"></a>
      </div>
      <div className="end-r player-bar"></div>
      <div className="bg player-bar"></div>
      <div className="wrap  wrap-v3">
        <BtnsWrapper>
          <a className="prev player-bar" onClick={() => handleMusicChange(false)}></a>
          <a
            className={classNames('player-bar', playing ? 'pause' : 'play ')}
            onClick={handleChangePlayingClick}
          ></a>
          <a className="next player-bar" onClick={() => handleMusicChange(true)}></a>
        </BtnsWrapper>

        <HeadWrapper>
          <img src={getImageSize(currentSong?.al?.picUrl, 34)} />
          <a href="#" className="mask player-bar"></a>
        </HeadWrapper>

        <PlayWrapper>
          <div className="info">
            <div className="name">{currentSong?.al?.name}</div>
            <div className="ar">
              {currentSong?.ar?.map((item: any, index: number) => (
                <div className="a" key={item.id}>
                  <span>{item.name}</span>
                  {index < currentSong.ar.length - 1 && <span className="line">/</span>}
                </div>
              ))}
            </div>
            <div className="src player-bar"></div>
          </div>

          <div className="bottom">
            {/* Slider组件 */}
            <Slider
              step={0.5}
              value={progress}
              tooltip={{ formatter: null }}
              onAfterChange={hanldeSliderClick}
              onChange={handleSliderChange}
            />
            <div className="time">
              <div className="current">{formatMillisecondToMinute(currentTime)}</div>
              <div className="divider"> / </div>
              <div className="duration">{formatMillisecondToMinute(duration)}</div>
            </div>
          </div>
        </PlayWrapper>

        <OperationWrapper>
          <a href="#" className="icon player-bar-icn" title="画中画歌词"></a>
          <a href="#" className="like player-bar" title="收藏"></a>
          <a href="#" className="share player-bar" title="分享"></a>
        </OperationWrapper>

        <PlayModeWrapper playMode={playMode}>
          <a href="#" className="icon volume player-bar"></a>
          <a href="#" className="icon loop player-bar" onClick={(e) => handlePlayModeClick(e)}></a>
        </PlayModeWrapper>
      </div>

      {/* 音频播放器 */}
      <audio ref={audioRef} onTimeUpdate={handleCurrentTimeUpdate} onEnded={handleAudioEnd} />
    </AppPlayerWrapper>
  )
}

export default memo(AppPlayerBar)
