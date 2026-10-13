import { configureStore } from '@reduxjs/toolkit'
import { commonReducer, locationReducer } from './Reducers'

export const store = configureStore({
  reducer: {
    common:commonReducer,
    location:locationReducer
  },
})

//typing for dispatch and root state

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType <typeof store.getState>