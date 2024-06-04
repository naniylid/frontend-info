import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import htmlSlice from '../components/TestBlock/HtmlTest/slice';
import jsSlice from '../components/TestBlock/JsTest/slice';
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
