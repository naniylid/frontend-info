export type Question = {
  title: string;
  variants: string[];
  correct: number;
};

export type onClickVariantType = (index: number, question: Question) => void;
