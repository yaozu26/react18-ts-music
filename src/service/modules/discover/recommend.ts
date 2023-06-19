import yzRequest from '@/service'

export function getBanners() {
  return yzRequest.get({ url: '/banner' })
}

export const getHotRecommend = (limit = 30) =>
  yzRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
