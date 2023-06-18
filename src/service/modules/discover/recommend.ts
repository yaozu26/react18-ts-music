import yzRequest from '@/service'

export function getBanners() {
  return yzRequest.get({ url: '/banner' })
}
