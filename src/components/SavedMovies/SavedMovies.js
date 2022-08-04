import React, { useCallback, useEffect, useMemo, useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesFilter from '../../utils/MovieFilter';

import './SavedMovies.css';
import mainApi from '../../utils/MainApi';

function SavedMovies({ cards, onCardClick, onCardDelete }) {
  const [initialSavedMovies, setInitiaSavedlMovies] = useState([]);
  const [query, setQuery] = useState(localStorage.getItem('query') ?? '');
  const [checkboxStatus, setCheckboxStatus] = useState(
    localStorage.getItem('checkboxStatus') ?? false );


  useEffect(() => {
    mainApi.getMovies().then((data) => {
        const filteredMovies = moviesFilter(data, query, checkboxStatus)
        setInitiaSavedlMovies(filteredMovies);
        console.log("initialSavedMovies", initialSavedMovies);
        console.log("data", data);
        console.log("filteredMovies", filteredMovies);
        console.log(checkboxStatus);
    });
  }, [ query, checkboxStatus]);

  const handleSearch = (query, checkboxStatus) => {
    setQuery(query);
    setCheckboxStatus(checkboxStatus)
  };
  useEffect(() => {
    localStorage.setItem('query', query);
    localStorage.setItem('checkboxStatus', checkboxStatus);
  }, [query, checkboxStatus]);

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
