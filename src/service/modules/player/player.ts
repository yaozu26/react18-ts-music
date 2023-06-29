import yzRequest from '@/service'

// 歌曲数据
export const getSongDetail = (ids: number) => {
  return yzRequest.get({ url: '/song/detail', params: { ids } })
}

// 获取歌词信息
export const getLyric = (id: number) => {
  return yzRequest.get({ url: '/lyric', params: { id } })
}
