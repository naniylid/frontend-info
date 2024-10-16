import React from 'react';
import { ICard } from './types';

export const Card: React.FC<ICard> = ({ title, desc, stack, url }) => {
  const [isExpanded, setIsExpanded] = React.useState(false); // Состояние для открытия/закрытия карточки

  const handleCardClick = () => {
    setIsExpanded((prevState) => !prevState); // Изменяем состояние открытия/закрытия карточки
  };

  return (
    <div className={`card ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}>
      <div className='card__inner js-expander' onClick={handleCardClick}>
        <span>{title}</span>
      </div>
      {isExpanded && (
        <div className='card__expander'>
          <i className='fa fa-close js-collapser' onClick={handleCardClick}></i>
          <p className='card__expander_stack'>{stack}</p>
          <p className='card__expander_desc'>{desc}</p>
          <a className='card__expander_link' href={url} target='_blank' rel='noopener noreferrer'>
            Project Link
          </a>
        </div>
      )}
    </div>
  );
};
