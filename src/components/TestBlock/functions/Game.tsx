import React from 'react';
import { onClickVariantType, Question } from '../HtmlTest';

const Game: React.FC<{
  step: number;
  question: Question;
  onClickVariant: onClickVariantType;
}> = ({ step, question, onClickVariant }) => {
  const percentage = Math.round((step / 29) * 100);

  return (
    <>
      <div className='progress'>
        <div style={{ width: `${percentage}%` }} className='progress__inner'></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants &&
          question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index, question)} key={text}>
              {text}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Game;
