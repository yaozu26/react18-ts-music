import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getAlbumNewest,
  getTopRanking,
  getSingerData
} from '@/service/modules/discover/recommend'
import { IPersonalized, IArtist } from '@/types/discover/recommend'

// banner数据
// export const fetchBannerDataAction = createAsyncThunk('banners', async () => {
//   const res: any = await getBanners()
//   return res.banners
// })

// banner数据
export const fetchBannerDataAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
  const res: any = await getBanners()
  dispatch(changeBannersAction(res.banners))
})

// 热门推荐
export const fetchHotRecommendsAction = createAsyncThunk(
  'hotRecommends',
  async (param, { dispatch }) => {
    const res: any = await getHotRecommend(8)
    dispatch(changeHotRecommendsAction(res.result))
  }
)

//新碟上架
export const fetchAlbumNewestAction = createAsyncThunk('albumNewest', async (arg, { dispatch }) => {
  const res: any = await getAlbumNewest()
  dispatch(changeAlbumNewestAction(res.albums))
})

// 榜单
export const fetchTopRankingAction = createAsyncThunk('topRanking', async (arg, { dispatch }) => {
  const rankingIds = [19723756, 3779629, 2884035]
  Promise.all(rankingIds.map((id) => getTopRanking(id))).then((ress) => {
    const res = ress.map((res: any) => res.playlist)
    dispatch(changeTopRankingAction(res))
  })
})

// 入驻歌手
export const fetchSingerDataAction = createAsyncThunk('singer', async (arg, { dispatch }) => {
  const res: any = await getSingerData()
  dispatch(changeSingerDataAction(res.artists))
})

interface IRecommend {
  banners: any[]
  hotRecommends: IPersonalized[]
  albumNewestData: IArtist[]
  topRankingData: any[]
  singerData: any[]
}

const initialState: IRecommend = {
  banners: [],
  hotRecommends: [],
  albumNewestData: [],
  topRankingData: [],
  singerData: []
}

const recommendSlicer = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendsAction(state, { payload }: PayloadAction<IPersonalized[]>) {
      state.hotRecommends = payload
    },
    changeAlbumNewestAction(state, { payload }: PayloadAction<IArtist[]>) {
      state.albumNewestData = payload
    },
    changeTopRankingAction(state, { payload }: PayloadAction<any[]>) {
      state.topRankingData = payload
    },
    changeSingerDataAction(state, { payload }) {
      state.singerData = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBannerDataAction.pending, () => {
  //       console.log('pending')
  //     })
  //     .addCase(fetchBannerDataAction.fulfilled, (state: any, { payload }) => {
  //       state.banners = payload
  //     })
  //     .addCase(fetchBannerDataAction.rejected, () => {
  //       console.log('rejected')
  //     })
  // }
})

export const {
  changeBannersAction,
  changeHotRecommendsAction,
  changeAlbumNewestAction,
  changeTopRankingAction,
  changeSingerDataAction
} = recommendSlicer.actions

export default recommendSlicer.reducer
