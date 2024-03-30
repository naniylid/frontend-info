import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';
import StudyPlan from '../components/StudyPlan';
import numbers from '../assets/image/numbers.svg';

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <img className='numbers' src={numbers} alt='' />
      <Header />
      <StudyPlan />
    </>
  );
};

export default Home;
