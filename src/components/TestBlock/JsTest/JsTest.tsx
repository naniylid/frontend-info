import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Result from '../functions/Result';
import { onClickVariantType } from '../types';
import Game from '../functions/Game';
import { setStep, setCorrect, setQuestions, setLoading, selectJsSlice } from './slice';
import '../Test.scss';

const JS_API_KEY: string = import.meta.env.VITE_JS_API_KEY as string;

const JsTest: React.FC = () => {
  const dispatch = useDispatch();
  const { step, correct, questions, loading } = useSelector(selectJsSlice);

  React.useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://api.mockfly.dev/mocks/20${JS_API_KEY}/jstest`);
        dispatch(setQuestions(response.data));
      } catch (error) {
        console.error('Failed to fetch questions: ', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchQuestions();
  }, []);

  const onClickVariant: onClickVariantType = (index, question) => {
    dispatch(setStep(step + 1));

    if (index === question.correct) {
      dispatch(setCorrect(correct + 1));
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
