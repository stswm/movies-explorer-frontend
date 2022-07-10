import React, { useState } from 'react';
import MoviesCard from '../MoviesCard/MovieCard';
import Preloader from '../Preloader/Preloader';

import './MoviesCardList.css';

const MoviesCardList = ({
  cards,
  onMoreBtn,
  onCardLike,
  onCardDelete,
  onCardClick,
}) => {
  const [isLoading, setLoading] = useState(false);
  const handlePreloader = () => {
    setLoading(true);
  };
  return (
    <section className='cards'>
      <ul className='cards__list'>
        {cards.map((card) => (
          <MoviesCard
            key={card.id}
            card={card}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>
      {isLoading ? (
        <Preloader />
      ) : (
        onMoreBtn && (
          <button
            className='cards__more-btn opacityEffect'
            type='button'
            name='test'
            onClick={handlePreloader}
          >
            Еще
          </button>
        )
      )}
    </section>
  );
};

export default MoviesCardList;
