import { getBanners, getHotRecommend } from '@/service/modules/discover/recommend'
import { IPersonalized } from '@/types/discover/recommend'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// export const fetchBannerDataAction = createAsyncThunk('banners', async () => {
//   const res: any = await getBanners()
//   return res.banners
// })

export const fetchBannerDataAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
  const res: any = await getBanners()
  dispatch(changeBannersAction(res.banners))
})

export const fetchHotRecommendsAction = createAsyncThunk('hotRecommends', (param, { dispatch }) => {
  getHotRecommend(8).then((res: any) => {
    dispatch(changeHotRecommendsAction(res.result))
  })
})

interface IRecommend {
  banners: any[]
  hotRecommends: IPersonalized[]
}

const initialState: IRecommend = {
  banners: [],
  hotRecommends: []
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

export const { changeBannersAction, changeHotRecommendsAction } = recommendSlicer.actions
export default recommendSlicer.reducer
