import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import htmlSlice from '../components/TestBlock/html-redux/slice';
import jsSlice from '../components/TestBlock/js-redux/slice';
import headerSlice from '../components/Header/HeaderSice';

export const store = configureStore({
  reducer: {
    headerSlice,
    htmlSlice,
    jsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
