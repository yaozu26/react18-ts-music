import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type GetStateType = typeof store.getState
type IRootState = ReturnType<GetStateType>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export default store
