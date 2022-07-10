import React from 'react';
import './Profile.css';

function Profile({ name, email }) {
  return (
    <section className='profile'>
      <form className='profile__form'>
        <div className='profile__shell-top'>
          <h2 className='profile__title'>Привет, {name}!</h2>
          <ul className='profile__list'>
            <li className='profile__item'>
              <span className='profile__item-text'>Имя</span>
              <input
                className='profile__input'
                type={'text'}
                placeholder='Ваше Имя'
                minLength={2}
                value={name}
                required
              />
            </li>
            <li className='profile__item'>
              <span className='profile__item-text'>email</span>
              <input
                className='profile__input'
                type={'text'}
                placeholder='Ваш email'
                minLength={2}
                value={email}
                required
              />
            </li>
          </ul>
        </div>
        <div className='profile__shell-bot'>
          <button className='profile__button opacityEffect' type='button'>
            Редактировать
          </button>
          <button
            className='profile__button profile__button-logout opacityEffect'
            type='button'
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
