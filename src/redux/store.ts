import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import htmlSlice from './htmlTest/slice';
import jsSlice from './jsTest/slice';

export const store = configureStore({
  reducer: {
    htmlSlice,
    jsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
