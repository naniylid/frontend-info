import React from 'react';

type ResultProps = {
  correct: number;
  totalQuestions: number;
};

const Result: React.FC<ResultProps> = ({ correct, totalQuestions }) => {
  return (
    <div className='result'>
      <img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
      <h2>
        Вы отгадали {correct} из {totalQuestions}
      </h2>
      <a href='/test'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
};

export default Result;
