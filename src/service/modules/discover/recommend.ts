import yzRequest from '@/service'

// 轮播图数据
export const getBanners = () => yzRequest.get({ url: '/banner' })

// 热门推荐数据
export const getHotRecommend = (limit = 30) =>
  yzRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })

// 新碟上架数据
export const getAlbumNewest = () =>
  yzRequest.get({
    url: '/album/newest'
  })

// 榜单数据
export const getTopRanking = (id: number) =>
  yzRequest.get({ url: '/playlist/detail', params: { id } })

// 入驻歌手
export const getSingerData = (limit = 5) =>
  yzRequest.get({ url: '/artist/list', params: { limit } })
