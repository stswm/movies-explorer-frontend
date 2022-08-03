import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import Switcher from '../../utils/Switcher/Switcher';
import { useLocation } from 'react-router-dom';

function SearchForm({ onSearchMovies }) {
  const [query, setQuery] = useState('');
  const [checkboxStatus, setCheckboxStatus] = useState(false);
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
    }, [location.pathname])

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchMovies(query, checkboxStatus);
  };
  function handleChangeQuery(e) {
    const input = document.getElementById('queryInput');
    input.setCustomValidity('');
    setQuery(e.target.value);
  }

  const handleChange = (checkboxStatus) => {
    setCheckboxStatus(checkboxStatus);
    onSearchMovies(query, checkboxStatus);
  }
  const handleCheckboxChange = (e) => {
    handleChange(e.target.checked);
  }
  useEffect(() => {
    if (!query) {
      const input = document.getElementById('queryInput');
      input.setCustomValidity('Нужно ввести ключевое слово');
    }
  }, [query])

  return (
    <section className='search-form'>
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
          <button className='search-form__btn opacityEffect' type='submit'></button>
        </div>
        <div className='search-form__filter'>
          <Switcher
          onChange={handleCheckboxChange}
          shotMovies={checkboxStatus}
          />
            <span className='search-form__filter-text'>Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
