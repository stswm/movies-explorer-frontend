import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import moviesApi from '../../utils/MoviesApi';
import moviesFilter from '../../utils/MovieFilter';
import './Movies.css';
import Preloader from '../Preloader/Preloader';

function Movies({ cards, onCardClick, onCardLike, onCardDelete }) {
  const [query, setQuery] = useState('');
  const [checkboxStatus, setCheckboxStatus] = useState(
    JSON.parse(localStorage.getItem('checkboxStatus')) ?? false
  );

  const [initialMovies, setInitialMovies] = useState([]);
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [isSearchMovies, setSearchMovies] = useState(false);
  const [searchStatus, setSearchStatus] = useState('');

  const [firstResultsNumber, setFirstResultsNumber] = useState(0);
  const [moreResultsNumber, setMoreResultsNumber] = useState(0);
  const [isMoreButtonVisible, setIsMoreButtonVisible] = useState(false);

  const currentViewport = document.documentElement.clientWidth;

  useEffect(() => {
    if (localStorage.getItem('searchResults')) {
      const init = JSON.parse(localStorage.getItem('searchResults'));
      const searchResult = moviesFilter(init, query, checkboxStatus);
      setFilteredMovies(searchResult);
    }
  }, []);

  const handleSearch = (query, checkboxStatus) => {
    setMoviesToRender([]);
    setQuery(query);
    setCheckboxStatus(checkboxStatus);
    setLoading(true);
    const initialMoviesInLocalStorage = JSON.parse(
      localStorage.getItem('initialMovies')
    );
    if (!initialMoviesInLocalStorage) {
      setSearchMovies(true);
      moviesApi
      .getMovies()
      .then((data) => {
        setInitialMovies(data);
        localStorage.setItem('initialMovies', JSON.stringify(data));
      })
      .catch(() => {
        setSearchStatus(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
          );
        })
        .finally(() => {
          setSearchMovies(false);
          setLoading(false);
        });
      } else {
        setInitialMovies(initialMoviesInLocalStorage);
        setSearchStatus(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
          );
          setLoading(false);
        }
  };

  useEffect(() => {
    if (initialMovies.length > 0) {
      const searchResults = moviesFilter(initialMovies, query, checkboxStatus);
      setFilteredMovies(searchResults);
      localStorage.setItem('query', query);
      localStorage.setItem('checkboxStatus', checkboxStatus);
      localStorage.setItem('searchResults', JSON.stringify(searchResults));
    }
  }, [initialMovies, query, checkboxStatus]);

  useEffect(() => {
    if (filteredMovies.length > 0) {
      if (filteredMovies.length > firstResultsNumber) {
        setMoviesToRender(filteredMovies.slice(0, firstResultsNumber));
        setIsMoreButtonVisible(true);
      } else {
        setMoviesToRender(filteredMovies);
      }
    }
  }, [filteredMovies, firstResultsNumber]);
  function handleMoreButtonClick() {
    setLoading(true);
    setMoviesToRender((state) =>
      filteredMovies.slice(0, state.length + moreResultsNumber)
    );
    setLoading(false);
  }
  useEffect(() => {
    if (moviesToRender.length === filteredMovies.length) {
      setIsMoreButtonVisible(false);
    }
  }, [moviesToRender, filteredMovies]);

  useEffect(() => {
    if (currentViewport <= 480) {
      setFirstResultsNumber(5);
      setMoreResultsNumber(2);
    } else if (currentViewport <= 768) {
      setFirstResultsNumber(8);
      setMoreResultsNumber(2);
    } else if (currentViewport <= 1279) {
      setFirstResultsNumber(12);
      setMoreResultsNumber(3);
    } else if (currentViewport >= 1280) {
      setFirstResultsNumber(12);
      setMoreResultsNumber(4);
    }
  }, [currentViewport]);

  const [isLoading, setLoading] = useState(false);
  return (
    <section className='movies'>
      <SearchForm onSearchMovies={handleSearch} />
      {moviesToRender.length > 0 ? (
        <MoviesCardList
          movies={cards}
          cards={moviesToRender}
          onMoreBtn={handleMoreButtonClick}
          onCardClick={onCardClick}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}
        />
      ) : (
        <span className='movies__status'>{searchStatus || "Ничего не найдено"}</span>
      )}

      {isLoading ? (
        <Preloader />
      ) : (
        <button
          className={
            isMoreButtonVisible
              ? 'movies__more-btn opacityEffect '
              : 'displayNone'
          }
          type='button'
          name='test'
          onClick={handleMoreButtonClick}
        >
          Еще
        </button>
      )}
    </section>
  );
}

export default Movies;
