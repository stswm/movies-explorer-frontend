import React, { useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css';
import mainApi from '../../utils/MainApi';
import { useState } from 'react';

function SavedMovies({ cards, onCardClick, onCardDelete }) {
  const [initialSavedMovies, setInitiaSavedlMovies] = useState([]);

  useEffect(() => {
    mainApi.getMovies().then((data) => {
      setInitiaSavedlMovies(data);
    });
  }, []);
  

  // const handleSearch = (query, checkboxStatus) => {
  //   setMoviesToRender([]);
  //   setQuery(query);
  //   setCheckboxStatus(checkboxStatus);
  //   setLoading(true)

  //   const initialMoviesInLocalStorage = JSON.parse(
  //     localStorage.getItem('initialMovies')
  //   );
  //   if (!initialMoviesInLocalStorage) {
  //     setSearchMovies(true);
  //     moviesApi
  //       .getMovies()
  //       .then((data) => {
  //         setInitialMovies(data);
  //         localStorage.setItem('initialMovies', JSON.stringify(data));
  //       })
  //       .catch(() => {
  //         setSearchStatus(
  //           'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
  //         );
  //       })
  //       .finally(() => {
  //         setSearchMovies(false);
  //         setLoading(false)
  //       });
  //   } else {
  //     setInitialMovies(initialMoviesInLocalStorage);
  //   }
  // };



  return (
    <section className='saved-movies'>
      <SearchForm 
      // onSearchMovies={handleSearch} 
      />
      {cards.length > 0 ? (
        <MoviesCardList
          movies={initialSavedMovies}
          onCardClick={onCardClick}
          cards={cards}
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
