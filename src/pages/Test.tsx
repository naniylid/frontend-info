import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Test.module.scss';

interface TestProps {
  to: string;
  title: string;
}
const testButtons: TestProps[] = [
  { to: '#', title: 'HTML и CSS' },
  { to: '#', title: 'JavaScript' },
];

const Test: React.FC = () => {
  return (
    <div className='test-task'>
      <h1>Тест</h1>
      <div className='line'>
        <p>
          Набор тестов по HTML, CSS и JavaScript является отличным способом проверить свои знания в
          веб-разработке. Эти тесты позволят вам оценить свои навыки в создании веб-страниц, стилей
          и интерактивных элементов на сайте. Путем решения вопросов вы сможете убедиться в своем
          понимании основных концепций и при необходимости узнать, над чем еще стоит поработать.
          Готовясь к таким тестам, вы будете лучше подготовлены к созданию креативных и
          функциональных веб-проектов.
        </p>
        <h2>Выбрать тест:</h2>
        <ul>
          <li>
            {testButtons.map((route, i) => {
              const { to, title } = route;
              return (
                <li key={i}>
                  <Link to={to}>
                    <button>{title}</button>
                  </Link>
                </li>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Test;
