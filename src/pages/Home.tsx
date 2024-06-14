import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';
import StudyPlan from '../components/StudyPlan';
import Recommendations from '../components/Recommendations';
import numbers from '../assets/image/numbers.svg';
import Ideas from '../components/Ideas/Ideas';

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <img className='numbers' src={numbers} alt='' />
      <Header />
      <StudyPlan />
      <Recommendations />
      <Ideas />
    </>
  );
};

export default Home;
