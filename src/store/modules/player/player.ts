import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getLyric, getSongDetail } from '@/service/modules/player/player'
import { parseLyric } from '@/utils/parse-lyric'
import type { ILyric } from '@/utils/parse-lyric'
import type { IRootState } from '@/store'

export enum PLAY_MODE {
  LOOP,
  RANDOM,
  ONE
}

interface IPlayerState {
  currentSong: any
  currentLyric: ILyric[]
  lyricIndex: number
  playSonglist: any[]
  playSongIndex: number
  playMode: PLAY_MODE
}

const initialState: IPlayerState = {
  currentSong: {},
  currentLyric: [],
  lyricIndex: -1,
  playSonglist: [],
  playSongIndex: -1,
  playMode: PLAY_MODE.LOOP
}

const playerSlider = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeCurrentLyricAction(state, { payload }) {
      state.currentLyric = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaySonglistAction(state, { payload }) {
      state.playSonglist = payload
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeCurrentLyricAction,
  changeLyricIndexAction,
  changePlaySonglistAction,
  changePlaySongIndexAction,
  changePlayModeAction
} = playerSlider.actions

export default playerSlider.reducer

export const fetchCurrentSongAction = createAsyncThunk<void, number, { state: IRootState }>(
  'playMusic',
  (id: number, { dispatch, getState }) => {
    const playSonglist = getState().player.playSonglist
    const findIndex = playSonglist.findIndex((item) => item.id === id)

    // 当前歌曲不在歌曲列表中
    if (findIndex === -1) {
      getSongDetail(id).then((res: any) => {
        const song = res.songs[0]

        const newPlaySonglist = [...playSonglist]
        newPlaySonglist.splice(0, 0, song)

        dispatch(changeCurrentSongAction(song))
        dispatch(changePlaySonglistAction(newPlaySonglist))
        dispatch(changePlaySongIndexAction(0))
      })
    } else {
      const song = playSonglist[findIndex]
      dispatch(changeCurrentSongAction(song))
      dispatch(changePlaySongIndexAction(findIndex))
    }

    // 歌词
    getLyric(id).then((res: any) => {
      const result = parseLyric(res.lrc.lyric)
      dispatch(changeCurrentLyricAction(result))
    })
  }
)

export const fetchChangeMusicAction = createAsyncThunk<void, boolean, { state: IRootState }>(
  'changeMusic',
  (isNext, { dispatch, getState }) => {
    // 拿到state中的数据
    const { playMode, playSongIndex, playSonglist } = getState().player

    if (!playSonglist) return

    let newPlaySongIndex = playSongIndex

    // 根据播放模式，切换歌曲
    console.log(playSongIndex, playSonglist)
    switch (playMode) {
      case PLAY_MODE.RANDOM:
        newPlaySongIndex = Math.floor(Math.random() * playSonglist.length)
        break
      default:
        newPlaySongIndex = isNext ? playSongIndex + 1 : playSongIndex - 1

        if (newPlaySongIndex >= playSonglist.length) newPlaySongIndex = 0
        if (newPlaySongIndex < 0) newPlaySongIndex = playSonglist.length - 1
        break
    }

    // 歌曲变更
    const song = playSonglist[newPlaySongIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(newPlaySongIndex))

    getLyric(song.id).then((res: any) => {
      const result = parseLyric(res.lrc.lyric)
      dispatch(changeCurrentLyricAction(result))
    })
  }
)
