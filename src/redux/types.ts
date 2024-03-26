import { Question } from '../components/TestBlock/types';

export interface TestSliceState {
  step: number;
  correct: number;
  questions: Question[];
  loading: boolean;
}
