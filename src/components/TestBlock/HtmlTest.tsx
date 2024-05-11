import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Result from './functions/Result';
import Game from './functions/Game';
import { onClickVariantType } from './types';
import { setStep, setCorrect, setQuestions, setLoading, selectHtmlSlice } from './html-redux/slice';
import './Test.scss';

const HTML_API_KEY: string = import.meta.env.VITE_HTML_API_KEY as string;

const HtmlTest: React.FC = () => {
  const dispatch = useDispatch();
  const { step, correct, questions, loading } = useSelector(selectHtmlSlice);

  React.useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://65746${HTML_API_KEY}.mockapi.io/htmlcss`);
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

export default HtmlTest;
