import React from 'react';

export const Card: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false); // Состояние для открытия/закрытия карточки

  const handleCardClick = () => {
    setIsExpanded((prevState) => !prevState); // Изменяем состояние открытия/закрытия карточки
  };

  return (
    <div className={`card ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}>
      <div className='card__inner js-expander' onClick={handleCardClick}>
        <span>Card</span>
      </div>
      {isExpanded && (
        <div className='card__expander'>
          <i className='fa fa-close js-collapser' onClick={handleCardClick}></i>
          Expander
        </div>
      )}
    </div>
  );
};
