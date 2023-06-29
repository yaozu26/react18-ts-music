// 请求自定义图片大小
export const getImageSize = (iamgeUrl: string, width: number, height: number = width) =>
  iamgeUrl + `?param=${width}y${height}`

// 格式大数量单位
export const formatCount = (count: number) => {
  return count > 10000
    ? count < 100000000
      ? Math.floor(count / 10000) + '万'
      : Math.floor(count / 100000000) + '亿'
    : count
}

// 音乐播放的链接
export const getSongPlayUrl = (id: number) =>
  `https://music.163.com/song/media/outer/url?id=${id}.mp3`

// 格式化时间：将毫秒转成分钟
export const formatMillisecondToMinute = (millisecond: number) => {
  const second = Math.floor((millisecond / 1000) % 60)
  const minute = Math.floor(millisecond / 1000 / 60)

  const formatSecond = String(second).padStart(2, '0')
  const formatMinute = String(minute).padStart(2, '0')

  return `${formatMinute}:${formatSecond}`
}
