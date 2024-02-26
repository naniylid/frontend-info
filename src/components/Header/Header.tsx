import React, { useState, useEffect } from 'react';
import './Header.module.scss';

const Header: React.FC = () => {
  const text = 'ПРИВЕТ!';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      setIndex((prevIndex) => (prevIndex + 1) % (text.length + 1));
    }, 300);

    return () => clearInterval(interval);
  }, [index, text]);

  return (
    <div className='header'>
      <h1>{displayedText}</h1>
      <div className='header-text'>
        <p>Добро пожаловать на наш сайт!</p>
        <p>
          Наш ресурс предназначен для всех, кто самостоятельно изучает фронтенд-разработку. Мы
          собрали здесь все необходимые материалы и ресурсы, чтобы обеспечить вас всем, что нужно на
          каждом этапе вашего обучения.
        </p>
        <p>
          На сайте вы найдете широкий спектр учебных материалов, включая учебники, видеоуроки,
          практические задания и справочники. Независимо от вашего текущего уровня знаний, мы
          стремимся предложить ресурсы, которые помогут вам развиваться и совершенствоваться в
          области фронтенд-разработки.
        </p>
        <p>
          Присоединяйтесь к нам и начните свой путь к экспертности в фронтенд-разработке уже
          сегодня!
        </p>
      </div>
    </div>
  );
};

export default Header;
