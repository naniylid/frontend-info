import React from 'react';
import axios from 'axios';
import Result from './functions/Result';
import Game from './functions/Game';
import './Test.scss';

export type Question = {
  title: string;
  variants: string[];
  correct: number;
};

export type onClickVariantType = (index: number, question: Question) => void;

const JsTest: React.FC = () => {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const [questions, setQuestions] = React.useState<Question[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `https://api.mockfly.dev/mocks/20fa1b8c-4396-41d7-a173-b685080d475f/jstest`,
        );
        setQuestions(response.data);
      } catch (error) {
        console.error('Failed to fetch questions: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const onClickVariant: onClickVariantType = (index, question) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (step < questions.length) {
    return (
      <div className='test-container'>
        <div className='test'>
          <Game step={step} question={questions[step]} onClickVariant={onClickVariant} />
        </div>
      </div>
    );
  } else {
    return (
      <div className='test-container'>
        <div className='test'>
          <Result correct={correct} totalQuestions={questions.length} />
        </div>
      </div>
    );
  }
};

export default JsTest;
