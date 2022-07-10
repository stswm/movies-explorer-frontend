import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css';

function SavedMovies({ cards, onCardClick, onCardSaved, onCardDelete }) {
  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList
        cards={cards}
        onCardClick={onCardClick}
        onCardSaved={onCardSaved}
        onCardDelete={onCardDelete}
      />
    </section>
  );
}

export default SavedMovies;
