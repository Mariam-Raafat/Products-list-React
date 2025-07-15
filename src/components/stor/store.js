import { configureStore } from '@reduxjs/toolkit'
import { CounterReducer } from './counterSlice'
export default configureStore({
  reducer: {
    count:CounterReducer,
  },
})