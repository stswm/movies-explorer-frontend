import React from 'react';
import MoviesCard from '../MoviesCard/MovieCard';

import './MoviesCardList.css';

const MoviesCardList = ({
  cards,
  movies,
  onCardLike,
  onCardDelete,
  setInitiaSavedlMovies,
}) => {

  return (
    <section className='cards'>
      <ul className='cards__list'>
        {cards.map((card) => (
          <MoviesCard
            key={card.id || card.movieId}
            card={card}
            cards={cards}
            onCardLike={onCardLike}
            movies={movies}
            onCardDelete={onCardDelete}
            setInitiaSavedlMovies={setInitiaSavedlMovies}
          />
        ))}
      </ul>

    </section>
  );
};

export default MoviesCardList;
