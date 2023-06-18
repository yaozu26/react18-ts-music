import { configureStore } from '@reduxjs/toolkit'
import recommednSlicer from './modules/discover/recommend'
import { useSelector, TypedUseSelectorHook, useDispatch, shallowEqual } from 'react-redux'

const store = configureStore({
  reducer: {
    recommend: recommednSlicer
  }
})

type GetStateType = typeof store.getState
type IRootState = ReturnType<GetStateType>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export { shallowEqual }
export default store
