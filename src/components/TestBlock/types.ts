export type Question = {
  title: string;
  variants: string[];
  correct: number;
};

export type onClickVariantType = (index: number, question: Question) => void;

export interface TestSliceState {
  step: number;
  correct: number;
  questions: Question[];
  loading: boolean;
}
