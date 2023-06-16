import { createSlice } from '@reduxjs/toolkit'

const counterSlicer = createSlice({
  name: 'counter',
  initialState: {
    message: 'Hello React'
  },
  reducers: {
    changeMessage(state, { payload }) {
      state.message = payload
    }
  }
})

export const { changeMessage } = counterSlicer.actions
export default counterSlicer.reducer
