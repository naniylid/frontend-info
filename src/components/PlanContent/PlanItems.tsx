import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { htmlButtons, jsButtons, frameButtons } from './Buttons';

const PlanItems: React.FC = () => {
  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.5,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    threshold: 0.2,
  });

  const { ref: thirdRef, inView: thirdInView } = useInView({
    threshold: 0.2,
  });

  const { ref: fourRef, inView: fourInView } = useInView({
    threshold: 0.5,
  });

  const { ref: fiveRef, inView: fiveInView } = useInView({
    threshold: 0.5,
  });
  const { ref: sixrRef, inView: sixInView } = useInView({
    threshold: 0.2,
  });

  return (
    <div className='plan-items'>
      <div
        ref={firstRef}
        className={`plan-items_block ${firstInView ? 'plan-items_block_loading' : ''}`}
      >
        <h2>HTML И CSS</h2>
        <div className='line'>
          <p>
            Срок изучения – 1 месяц. Необходимо знать основные теги, что такое адаптивная верстка,
            семантические теги, CSS Grid и другое. 
          </p>
          <ul>
            {htmlButtons.map((route, i) => {
              const { to, title } = route;
              return (
                <li key={i}>
                  <Link to={to} target='_blank'>
                    <button>{title}</button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        ref={secondRef}
        className={`plan-items_block ${secondInView ? 'plan-items_block_loading' : ''}`}
      >
        <h2>JavaScript</h2>
        <div className='line '>
          <p>
            Не уделяй все время теории. Допустим у тебя есть 3 часа на обучение в день. 1 час читай
            теорию, а в остальные два практикуй изученный материал. Рекомендую регулярно решать
            задачи на LeetCode или CodeWars.
          </p>
          <p>Практика</p>
          <div className='plan-items_block--second-text'>
            <div className='line'>
              <p>
                Решать задачи, писать мини-проекты на чистом JS (много вариантов есть на YouTube).
                Рекомендую написать минимум пять проектов. Желательно использовать API.{' '}
              </p>
              <p>
                API - это механизмы, которые позволяют двум программным компонентам
                взаимодействовать друг с другом, используя набор определений и протоколов.
              </p>
            </div>
          </div>
          <ul>
            {jsButtons.map((route, i) => {
              const { to, title } = route;
              return (
                <li key={i}>
                  <Link to={to} target='_blank'>
                    <button>{title}</button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        ref={thirdRef}
        className={`plan-items_block ${thirdInView ? 'plan-items_block_loading' : ''}`}
      >
        <h2>React, Angular или Vue</h2>
        <div className='line '>
          <p>
            Если ты хорошо знаешь JS, то ты без проблем можешь изучить все 3. Я пока что выбрала
            React, так как он самый популярный. На React рекомендую написать 1-2 крупных проекта для
            портфолио.
          </p>
          <ul>
            {frameButtons.map((route, i) => {
              const { to, title } = route;
              return (
                <li key={i}>
                  <Link to={to} target='_blank'>
                    <button>{title}</button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        ref={thirdRef}
        className={`plan-items_block ${thirdInView ? 'plan-items_block_loading' : ''}`}
      >
        <h2>TypeScript</h2>
        <div className='line '>
          <p>
            Изучить основы. Достаточно почитать официальную документацию и посмотреть практику на
            YouTube.
          </p>
          <ul>
            <li>
              <Link to='/' target='_blank'>
                <button>ЗАПОЛНИТЬ</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref={fourRef}
        className={`plan-items_block ${fourInView ? 'plan-items_block_loading' : ''}`}
      >
        <h2>Алгоритмы</h2>
        <div className='line '>
          <p>
            Рекомендую репозиторий Практиковаться на LeetCode и Codewars GeeksforGeeks:
            GeeksforGeeks предоставляет обширные материалы по алгоритмам, структурам данных и
            множеству практических задач. HackerRank предоставляет практические задачи по различным
            темам, включая алгоритмы и структуры данных.
          </p>
          <ul>
            <li>
              <Link to='/' target='_blank'>
                <button>ЗАПОЛНИТЬ</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref={fiveRef}
        className={`plan-items_block ${fiveInView ? 'plan-items_block_loading' : ''}`}
      >
        <h2>Accessibility, A11y</h2>
        <div className='line '>
          <p>Рекомендую знать, но не обязательно</p>
          <ul>
            <li>
              <Link to='/' target='_blank'>
                <button>ЗАПОЛНИТЬ</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref={sixrRef}
        className={`plan-items_block ${sixInView ? 'plan-items_block_loading' : ''}`}
      >
        <h2>Дополнительно нужно знать</h2>
        <div className='line '>
          <div className='plan-items_block--list'>
            <p>Английский язык</p>
            <div className='plan-items_block--list__text'>
              <div className='line '>
                <p>
                  Желательно иметь базовый уровень, чтобы не было трудностей в чтении кода или
                  документации, написании переменных.
                </p>
              </div>
            </div>
          </div>
          <div className='plan-items_block--list'>
            <p>Git</p>
            <div className='plan-items_block--list__text'>
              <div className='line '>
                <p>
                  Git - это специальная программа, которая позволяет отслеживать любые изменения в
                  файлах, хранить их версии и оперативно возвращаться в любое сохранённое
                  состояние. 
                </p>
                <ul>
                  <li>
                    <Link to='/' target='_blank'>
                      <button>Git →</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='plan-items_block--list'>
            <p>WEBPACK</p>
            <div className='plan-items_block--list__text'>
              <div className='line '>
                <p>WEBPACK - это статический модульный сборщик для приложений на JavaScript.</p>
                <ul>
                  <li>
                    <Link to='/' target='_blank'>
                      <button>WEBPACK →</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='plan-items_block--list'>
            <p>Интернет</p>
            <div className='plan-items_block--list__text'>
              <div className='line '>
                <p>
                  Понимать как работает интернет (HTTP/HTTPS, что такое хостинг/домен/протокол и так
                  далее)
                </p>
                <ul>
                  <li>
                    <Link to='/' target='_blank'>
                      <button>Теория →</button>
                    </Link>
                    <Link to='/' target='_blank'>
                      <button>Теория →</button>
                    </Link>
                    <Link to='/' target='_blank'>
                      <button>Теория →</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanItems;
