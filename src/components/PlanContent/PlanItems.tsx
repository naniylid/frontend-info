import React from 'react';

const PlanItems: React.FC = () => {
  return (
    <div className='plan-items'>
      <div className='plan-items_block'>
        <h2>HTML И CSS</h2>
        <div className='line'></div>
        <p>
          Срок изучения – 1 месяц. Необходимо знать основные теги, что такое адаптивная верстка,
          семантические теги, CSS Grid и другое. 
        </p>
        <ul>
          <li>
            <button>
              <a href=''>Теория →</a>
            </button>
          </li>
          <li>
            <button>
              <a href=''>YouTube →</a>{' '}
            </button>
          </li>
          <li>
            <button>
              <a href=''>Практика 1 →</a>
            </button>
          </li>
          <li>
            <button>
              <a href=''> Практика 2 →</a>
            </button>
          </li>
        </ul>
      </div>
      <div className='plan-items_block'>
        <h2>JavaScript</h2>
        <div className='line'></div>
        <p>
          Не уделяй все время теории. Допустим у тебя есть 3 часа на обучение в день. 1 час читай
          теорию, а в остальные два практикуй изученный материал. Рекомендую регулярно решать задачи
          на LeetCode или CodeWars.
        </p>
        <p>Практика</p>
        <div className='line'></div>
        <p>
          Решать задачи, писать мини-проекты на чистом JS (много вариантов есть на YouTube).
          Рекомендую написать минимум пять проектов. Желательно использовать API.{' '}
        </p>
        <p>
          API - это механизмы, которые позволяют двум программным компонентам взаимодействовать друг
          с другом, используя набор определений и протоколов.
        </p>
        <ul>
          <li>
            <button>
              <a href=''>Теория →</a>
            </button>
          </li>
          <li>
            <button>
              <a href=''>Roadmap →</a>
            </button>
          </li>
          <li>
            <button>
              <a href=''>YouTube →</a>{' '}
            </button>
          </li>
        </ul>
      </div>
      <div className='plan-items_block'>
        <h2>React, Angular или Vue</h2>
        <div className='line'></div>
        <p>
          Если ты хорошо знаешь JS, то ты без проблем можешь изучить все 3. Я пока что выбрала
          React, так как он самый популярный. На React рекомендую написать 1-2 крупных проекта для
          портфолио.
        </p>
        <ul>
          <li>
            <button>
              <a href=''>Теория →</a>
            </button>
          </li>
          <li>
            <button>
              <a href=''>Roadmap →</a>
            </button>
          </li>
          <li>
            <button>
              <a href=''>YouTube →</a>{' '}
            </button>
          </li>
        </ul>
      </div>
      <div className='plan-items_block'>
        <h2>TypeScript</h2>
        <div className='line'></div>
        <p>
          Изучить основы. Достаточно почитать официальную документацию и посмотреть практику на
          YouTube.
        </p>
        <ul>
          <li>
            <button>
              <a href=''>ЗАПОЛНИТЬ</a>
            </button>
          </li>
        </ul>
      </div>
      <div className='plan-items_block'>
        <h2>Алгоритмы</h2>
        <div className='line'></div>
        <p>
          Рекомендую репозиторий Практиковаться на LeetCode и Codewars GeeksforGeeks: GeeksforGeeks
          предоставляет обширные материалы по алгоритмам, структурам данных и множеству практических
          задач. HackerRank предоставляет практические задачи по различным темам, включая алгоритмы
          и структуры данных.
        </p>
        <ul>
          <li>
            <button>
              <a href=''>????</a>
            </button>
          </li>
        </ul>
      </div>
      <div className='plan-items_block'>
        <h2>Accessibility, A11y</h2>
        <div className='line'></div>
        <p>Рекомендую знать, но не обязательно</p>
        <ul>
          <li>
            <button>
              <a href=''>????</a>
            </button>
          </li>
        </ul>
      </div>
      <div className='plan-items_block'>
        <h2>Дополнительно нужно знать</h2>
        <div className='line'></div>
        <div className='plan-items_block--list'>
          <p>Английский язык</p>
          <div className='line list-line'></div>
          <p>
            Желательно иметь базовый уровень, чтобы не было трудностей в чтении кода или
            документации, написании переменных.
          </p>
        </div>
        <div className='plan-items_block--list'>
          <p>Git</p>
          <div className='line list-line'></div>
          <p>
            Git - это специальная программа, которая позволяет отслеживать любые изменения в файлах,
            хранить их версии и оперативно возвращаться в любое сохранённое состояние. 
          </p>
          <ul>
            <li>
              <button>
                <a href=''>Git →</a>
              </button>
            </li>
          </ul>
        </div>
        <div className='plan-items_block--list'>
          <p>WEBPACK</p>
          <div className='line list-line'></div>
          <p>WEBPACK - это статический модульный сборщик для приложений на JavaScript.</p>
          <ul>
            <li>
              <button>
                <a href=''>WEBPACK →</a>
              </button>
            </li>
          </ul>
        </div>
        <div className='plan-items_block--list'>
          <p>Интернет</p>
          <div className='line list-line'></div>
          <p>
            Понимать как работает интернет (HTTP/HTTPS, что такое хостинг/домен/протокол и так
            далее)
          </p>
          <ul>
            <li>
              <button>
                <a href=''>Теория →</a>
              </button>
            </li>
            <li>
              <button>
                <a href=''>Теория →</a>
              </button>
            </li>
            <li>
              <button>
                <a href=''>Теория →</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlanItems;
