import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useCallback, useRef } from 'react';
// import { Link } from 'react-router-dom';

import './Navigation.module.scss';

interface Route {
  href: string;
  title: string;
}

const routes: Route[] = [
  { href: '#', title: 'ПЛАН ОБУЧЕНИЯ' },
  { href: '#', title: 'РЕКОМЕНДАЦИИ' },
  { href: '#', title: 'ИДЕИ' },
  { href: '#', title: 'ТЕСТ' },
];

const Navigation: React.FC = () => {
  const navRef = useRef<HTMLUListElement>(null);

  const showNavbar = useCallback(() => {
    if (navRef.current) {
      navRef.current.classList.toggle('responsive_nav');
    }
  }, []);

  return (
    <>
      <nav>
        <div className='border'>
          {' '}
          <a href='/'> </a>
        </div>

        <ul ref={navRef}>
          {routes.map((route, i) => {
            const { href, title } = route;
            return (
              <li key={i}>
                <a href={href}>{title}</a>
              </li>
            );
          })}
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes />
          </button>
        </ul>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>
    </>
  );
};

export default Navigation;
