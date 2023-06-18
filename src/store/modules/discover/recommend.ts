import { getBanners } from '@/service/modules/discover/recommend'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// export const fetchBannerDataAction = createAsyncThunk('banners', async () => {
//   const res: any = await getBanners()
//   return res.banners
// })

export const fetchBannerDataAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
  const res: any = await getBanners()
  dispatch(changeBannersAction(res.banners))
})

interface IRecommend {
  banners: any[]
}

const initialState: IRecommend = {
  banners: []
}

const recommendSlicer = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
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

export const { changeBannersAction } = recommendSlicer.actions
export default recommendSlicer.reducer
