export const getImageSize = (iamgeUrl: string, width: number, height: number = width) =>
  iamgeUrl + `?param=${width}y${height}`

export const formatCount = (count: number) => {
  return count > 10000
    ? count < 100000000
      ? Math.floor(count / 10000) + '万'
      : Math.floor(count / 100000000) + '亿'
    : count
}
