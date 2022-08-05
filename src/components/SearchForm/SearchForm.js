import { useLocation, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import Switcher from '../../utils/Switcher/Switcher';

function SearchForm({ onSearchMovies }) {
  const [query, setQuery] = useState(localStorage.getItem('query') ?? '');
  const [querySaved, setQuerySaved] = useState('');
  const [checkboxStatus, setCheckboxStatus] = useState(
    JSON.parse(localStorage.getItem('checkboxStatus')) ?? false
  );
  const [checkboxStatusSaved, setCheckboxStatusSaved] = useState(false);
  let location = useLocation();

  useEffect(() => {
    const value = localStorage.getItem('checkboxStatus');
    if (location.pathname === '/movies') {
      if (localStorage.getItem('query')) {
        setQuery(localStorage.getItem('query'));
      }
      if (JSON.parse(value) === true) {
        setCheckboxStatus(true);
      } else {
        setCheckboxStatus(false);
      }
    }
    if (location.pathname === '/saved-movies') {
      if (querySaved) {
        setQuerySaved(querySaved);
      }
      if (checkboxStatusSaved === true) {
        setCheckboxStatusSaved(true);
      } else {
        setCheckboxStatusSaved(false);
      }
    }
  }, [location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchMovies(query, checkboxStatus);
  };
  const handleSubmitSavedMovie = (e) => {
    e.preventDefault();
    onSearchMovies(querySaved, checkboxStatusSaved);
  };
  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }
  function handleChangeQuerySaved(e) {

    setQuerySaved(e.target.value);
  }

  const handleChange = (checkboxStatus) => {
    setCheckboxStatus(checkboxStatus);
    onSearchMovies(query, checkboxStatus);
  };
  const handleChangeSaved = (checkboxStatusSaved) => {
    setCheckboxStatusSaved(checkboxStatusSaved);
    onSearchMovies(querySaved, checkboxStatusSaved);
  };
  const handleCheckboxChange = (e) => {
    handleChange(e.target.checked);
  };
  const handleCheckboxChangeSaved = (e) => {
    handleChangeSaved(e.target.checked);
  };

  return (
    <section className='search-form'>
      <Route path='/movies'>
        <form className='search-form__form' onSubmit={handleSubmit}>
          <div className='search-form__shell'>
            <input
              id='queryInput'
              className='search-form__input'
              type='text'
              placeholder='Фильм'
              value={query || ''}
              onChange={handleChangeQuery}
              required
            />
            <button
              className='search-form__btn opacityEffect'
              type='submit'
            ></button>
          </div>
          <div className='search-form__filter'>
            <Switcher
              onChange={handleCheckboxChange}
              shotMovies={checkboxStatus}
            />
            <span className='search-form__filter-text'>Короткометражки</span>
          </div>
        </form>
      </Route>

      <Route path='/saved-movies'>
        <form className='search-form__form' onSubmit={handleSubmitSavedMovie}>
          <div className='search-form__shell'>
            <input
              id='queryInputSaved'
              className='search-form__input'
              type='text'
              placeholder='Фильм'
              value={querySaved || ''}
              onChange={handleChangeQuerySaved}
              required
            />
            <button
              className='search-form__btn opacityEffect'
              type='submit'
            ></button>
          </div>
          <div className='search-form__filter'>
            <Switcher
              onChange={handleCheckboxChangeSaved}
              shotMovies={checkboxStatusSaved}
            />
            <span className='search-form__filter-text'>Короткометражки</span>
          </div>
        </form>
      </Route>
    </section>
  );
}

export default SearchForm;
