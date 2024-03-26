import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TestSliceState } from '../types';
import { RootState } from '../store';
import { Question } from '../../components/TestBlock/types';

const initialState: TestSliceState = {
  step: 0,
  correct: 0,
  questions: [],
  loading: true,
};

const jsSlice = createSlice({
  name: 'js',
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    setCorrect(state, action: PayloadAction<number>) {
      state.correct = action.payload;
    },
    setQuestions(state, action: PayloadAction<Question[]>) {
      state.questions = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setStep, setCorrect, setQuestions, setLoading } = jsSlice.actions;
export const selectJsSlice = (state: RootState) => state.jsSlice;

export default jsSlice.reducer;
