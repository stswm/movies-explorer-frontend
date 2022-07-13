import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './Movies.css';

function Movies({
  cards,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList
        cards={cards}
        onMoreBtn={true}
        onCardClick={onCardClick}
        onCardLike={onCardLike}
        onCardDelete={onCardDelete}
      />
    </section>
  );
}

export default Movies;
