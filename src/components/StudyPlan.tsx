import React from 'react';

import '../styles/pages/StudyPlan.module.scss';
import PlanItems from './PlanContent/PlanItems';

const StudyPlan: React.FC = () => {
  return (
    <section className='study-plan'>
      <h1>ПЛАН ОБУЧЕНИЯ</h1>
      <div className='main-line'></div>
      <PlanItems />
    </section>
  );
};

export default StudyPlan;
