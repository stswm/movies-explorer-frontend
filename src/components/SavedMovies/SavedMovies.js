import React, { useEffect, useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesFilter from '../../utils/MovieFilter';

import './SavedMovies.css';
import mainApi from '../../utils/MainApi';

function SavedMovies({ cards, onCardClick, onCardDelete }) {
  const [initialSavedMovies, setInitiaSavedlMovies] = useState([]);
  const [querySaved, setQuerySaved] = useState('');
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  useEffect(() => {
      const filteredMovies = moviesFilter(cards, querySaved, checkboxStatus);
      setInitiaSavedlMovies(filteredMovies);
  }, [querySaved, checkboxStatus, cards]);

  const handleSearch = (querySaved, checkboxStatus) => {
    setQuerySaved(querySaved);
    setCheckboxStatus(checkboxStatus);
  };

  return (
    <section className='saved-movies'>
      <SearchForm onSearchMovies={handleSearch} />
      {cards.length > 0 ? (
        <MoviesCardList
          movies={initialSavedMovies}
          onCardClick={onCardClick}
          cards={initialSavedMovies}
          setInitiaSavedlMovies={setInitiaSavedlMovies}
          onCardDelete={onCardDelete}
        />
      ) : (
        <span className='movies__status'>
          Вы еще не сохранили ни одного фильма
        </span>
      )}
    </section>
  );
}

export default SavedMovies;
