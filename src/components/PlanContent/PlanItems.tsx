import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
    htmlButtons,
    jsButtons,
    frameButtons,
    tsButtons,
    algorithmsButtons,
    accessibilityButtons,
    moreButtons,
} from './Buttons';
import { PlanBlock } from '../PlanBlock/PlanBlock';
import { Link } from 'react-router-dom';

export const PlanItems: React.FC = () => {
    const { ref: firstRef, inView: firstInView } = useInView({ threshold: 0.5 });
    const { ref: secondRef, inView: secondInView } = useInView({ threshold: 0.2 });
    const { ref: thirdRef, inView: thirdInView } = useInView({ threshold: 0.2 });
    const { ref: fourRef, inView: fourInView } = useInView({ threshold: 0.5 });
    const { ref: fiveRef, inView: fiveInView } = useInView({ threshold: 0.5 });
    const { ref: sixRef, inView: sixInView } = useInView({ threshold: 0.2 });

    return (
        <div className='plan-items'>
            <PlanBlock
                refProp={firstRef}
                inView={firstInView}
                title='HTML И CSS'
                content={
                    <>
                        <p>
                            Срок изучения – 1 месяц. Необходимо знать основные теги, что такое
                            адаптивная верстка, семантические теги, CSS Grid и другое.
                        </p>
                    </>
                }
                buttons={htmlButtons}
            />

            <PlanBlock
                refProp={secondRef}
                inView={secondInView}
                title='JavaScript'
                content={
                    <>
                        <p>
                            Не уделяй все время теории. Допустим у тебя есть 3 часа на обучение в
                            день. 1 час читай теорию, а в остальные два практикуй изученный
                            материал. Рекомендую регулярно решать задачи на LeetCode или CodeWars.
                        </p>
                        <p>Практика</p>
                        <div className='plan-items_block--second-text'>
                            <div className='plan-items_block--content'>
                                <p>
                                    Решать задачи, писать мини-проекты на чистом JS (много вариантов
                                    есть на YouTube). Рекомендую написать минимум пять проектов.
                                    Желательно использовать API.
                                </p>
                                <p>
                                    API - это механизмы, которые позволяют двум программным
                                    компонентам взаимодействовать друг с другом, используя набор
                                    определений и протоколов.
                                </p>
                            </div>
                        </div>
                    </>
                }
                buttons={jsButtons}
            />

            <PlanBlock
                refProp={thirdRef}
                inView={thirdInView}
                title='React, Angular или Vue'
                content={
                    <p>
                        Если ты хорошо знаешь JS, то ты без проблем можешь изучить все 3. Я пока что
                        выбрала React, так как он самый популярный. На React рекомендую написать 1-2
                        крупных проекта для портфолио.
                    </p>
                }
                buttons={frameButtons}
            />

            <PlanBlock
                refProp={fourRef}
                inView={fourInView}
                title='TypeScript'
                content={
                    <p>
                        TypeScript — это строго типизированный язык программирования, построенный на
                        JavaScript. TypeScript позволяет выявлять ошибки на этапе разработки,
                        облегчает совместную работу в команде и улучшает производительность
                        разработки в больших проектах.
                    </p>
                }
                buttons={tsButtons}
            />

            <PlanBlock
                refProp={fiveRef}
                inView={fiveInView}
                title='Алгоритмы и структуры данных'
                content={
                    <p>
                        Алгоритмы — это последовательность шагов для решения задач, а структуры
                        данных — способы организации и хранения данных для их эффективного
                        использования. Оба являются необходимыми для успешного прохождения
                        собеседования на позиции разработчика.
                    </p>
                }
                buttons={algorithmsButtons}
            />

            <PlanBlock
                refProp={sixRef}
                inView={sixInView}
                title='Accessibility, A11y'
                content={
                    <p>
                        Доступность (Accessibility) в веб-разработке — это обеспечение возможности
                        использования сайтов как можно большим числом людей, включая тех, чьи
                        способности как-либо ограничены.
                    </p>
                }
                buttons={accessibilityButtons}
            />

            <PlanBlock
                refProp={sixRef}
                inView={sixInView}
                title='Дополнительно нужно знать'
                content={
                    <>
                        <div className='plan-items_block--list'>
                            <p>Английский язык</p>
                            <div className='plan-items_block--list__text'>
                                <p>
                                    Желательно иметь базовый уровень, чтобы не было трудностей в
                                    чтении кода или документации, написании переменных.
                                </p>
                            </div>
                        </div>
                        <div className='plan-items_block--list'>
                            <p>Git</p>
                            <div className='plan-items_block--list__text'>
                                <p>
                                    Git - это специальная программа, которая позволяет отслеживать
                                    любые изменения в файлах, хранить их версии и оперативно
                                    возвращаться в любое сохранённое состояние.
                                </p>
                                <ul>
                                    <li>
                                        <Link to='https://git-scm.com' target='_blank'>
                                            <button>Git →</button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='plan-items_block--list'>
                            <p>Сборщики</p>
                            <div className='plan-items_block--list__text'>
                                <p>
                                    Сборщик – это инструмент, который помогает собрать (или сложить
                                    вместе) все части вашего проекта, чтобы он работал как одно
                                    целое. Представь, что ты собираешь пазл. У тебя есть много
                                    разных кусочков пазла, и ты хочешь сложить их вместе, чтобы
                                    получить красивую картинку.
                                </p>
                                <ul>
                                    <li>
                                        <Link to='https://webpack.js.org' target='_blank'>
                                            <button>WEBPACK →</button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='https://vitejs.dev' target='_blank'>
                                            <button>VITE →</button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='plan-items_block--list'>
                            <p>Интернет и веб-технологии</p>
                            <div className='plan-items_block--list__text'>
                                <p>
                                    Понимать как работает интернет (HTTP/HTTPS, что такое
                                    хостинг/домен/протокол и так далее)
                                </p>
                                <ul>
                                    {moreButtons.map((route, i) => {
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
                    </>
                }
                buttons={[]}
            />
        </div>
    );
};
