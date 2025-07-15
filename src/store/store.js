import { configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from './counterSlice';
import {loadingReducer} from './loadingSlice';
export default configureStore({
  reducer: {
    count:CounterReducer,
    loading:loadingReducer
  },
});