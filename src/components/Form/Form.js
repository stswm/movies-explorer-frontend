import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import './Form.css';

function Form({ header, btnName, caption, link, path, loginForm }) {
  return (
    <form className='form'>
      <div className='form__shell_top'>
        <Link to='/'>
          <img className=' opacityEffect' src={logo} alt='Логотип' />
        </Link>
        <h2 className='form__title'> {header} </h2>
        <ul className='form__list'>
          <li className={!loginForm
                ? `form__item form__item_name`
                : `form__item form__item_name disabled`}>
            <label className='form__label'>Имя</label>
            <input
              className='form__input'
              placeholder=' Ваше Имя'
              type='text'
              required
            />
            <span className='form__error'> </span>
          </li>
          <li className='form__item form__item_email'>
            <label className='form__label'>E-mail</label>
            <input
              className='form__input email'
              placeholder=' Some@email.com'
              type='email'
              required
            />
            <span className='form__error'> </span>
          </li>
          <li className='form__item form__item_password'>
            <label className='form__label'>Пароль</label>
            <input
              className='form__input'
              placeholder=' Пароль'
              type='password'
              autocomplete='new-password'
              required
            />
            <span className='form__error'> </span>
          </li>
        </ul>
      </div>
      <div className='form__shell_bot'>
        <button className='form__btn opacityEffect' type='submit'>
          {btnName}
        </button>
        <p className='form__caption'>
          {caption}
          <Link to={path} className='login__link opacityEffect'>
            {link}
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Form;
