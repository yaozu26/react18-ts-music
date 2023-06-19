// 热门推荐
export interface IPersonalized {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}

export interface IPersonalizedResult {
  hasTaste: boolean
  code: number
  category: number
  result: Array<IPersonalized>
}
