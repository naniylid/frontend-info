import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.module.scss";

import {
  selectHeaderSlice,
  setIndex,
  setDisplayedText,
  setIsVisible,
} from "./HeaderSice";

export const Header: React.FC = () => {
  const text = "ПРИВЕТ!";
  const dispatch = useDispatch();
  const { displayedText, index, isVisible } = useSelector(selectHeaderSlice);

  useEffect(() => {
    const handleScroll = () => {
      // Проверяем, виден ли компонент на экране
      const headerElement = document.querySelector(".header");
      if (headerElement) {
        const headerRect = headerElement.getBoundingClientRect();
        const isVisible =
          headerRect.top < window.innerHeight && headerRect.bottom >= 0;
        dispatch(setIsVisible(isVisible));
      }
    };

    // Добавляем обработчик события скроллинга
    window.addEventListener("scroll", handleScroll);

    // Очищаем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isVisible) {
      interval = setInterval(() => {
        const nextChar = text[index];

        const newText = displayedText + nextChar;
        dispatch(setDisplayedText(newText));
        dispatch(setIndex(index + 1));

        if (index === text.length) {
          // Если достигли конца текста, сбрасываем индекс и отображаемый текст
          dispatch(setIndex(0));
          dispatch(setDisplayedText(""));
        }
      }, 400);
    } else {
      // Если компонент стал невидимым, очищаем интервал
      if (interval) {
        clearInterval(interval);
      }
    }

    // Очищаем интервал при размонтировании компонента
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [dispatch, displayedText, index, isVisible, text]);

  return (
    <header className="header">
      <div className="header__title-container">
        <h1>{displayedText}</h1>
      </div>

      <div className="header-text">
        {/* <div className='header_item'>
          <AnimSquares />
        </div> */}
        <p>Добро пожаловать на наш сайт!</p>
        <p>
          Наш ресурс предназначен для всех, кто самостоятельно изучает
          фронтенд-разработку. Мы собрали здесь все необходимые материалы и
          ресурсы, чтобы обеспечить вас всем, что нужно на каждом этапе вашего
          обучения.
        </p>
        <p>
          На сайте вы найдете широкий спектр учебных материалов, включая
          учебники, видеоуроки, практические задания и справочники. Независимо
          от вашего текущего уровня знаний, мы стремимся предложить ресурсы,
          которые помогут вам развиваться и совершенствоваться в области
          фронтенд-разработки.
        </p>
        <p>
          Присоединяйтесь к нам и начните свой путь к экспертности в
          фронтенд-разработке уже сегодня!
        </p>
      </div>
    </header>
  );
};
