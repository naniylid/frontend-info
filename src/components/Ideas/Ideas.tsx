import React from 'react';
import './Ideas.module.scss';
import { Card } from './Card';

const Ideas: React.FC = () => {
  return (
    <section className='ideas'>
      <h1>ИДЕИ ПРОЕКТОВ</h1>
      <div className='main-line'></div>
      <div className='cards'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Ideas;
