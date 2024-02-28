import React from 'react';

import '../styles/pages/StudyPlan.module.scss';
import PlanItems from '../components/PlanContent/PlanItems';

const StudyPlan: React.FC = () => {
  return (
    <div className='study-plan'>
      <h1>ПЛАН ОБУЧЕНИЯ</h1>
      <div className='main-line'></div>
      <PlanItems />
    </div>
  );
};

export default StudyPlan;
