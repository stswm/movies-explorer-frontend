import React from 'react';
import './SearchForm.css';
import Switcher from '../../utils/Switcher/Switcher';

function SearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('here');
  };
  return (
    <section className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmit}>
        <div className='search-form__shell'>
          <input
            className='search-form__input'
            type='text'
            placeholder='Фильм'
            required
          />
          <button className='search-form__btn opacityEffect' type='submit'></button>
        </div>
        <div className='search-form__filter'>
          <Switcher/>
            <span className='search-form__filter_text'>Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
