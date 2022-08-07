import React, { useEffect, useState } from 'react';
import './Profile.css';

function Profile({
  onSignout,
  onProfileEdit,
  requestStatus: { message },
  currentUser,
}) {
  const [name, setName] = useState(currentUser.name);
  const [previousName, setPreviousName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [previousEmail, setPreviousEmail] = useState(currentUser.email);
  const [isDisabled, setDisabled] = useState(false);
  const [requestStatusText, setRequestStatusText] = useState('');

  useEffect(() => {
    setRequestStatusText(message);
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    onProfileEdit({ name, email });
    setDisabled(false);
  };
  useEffect(() => {
    const localStorageName = localStorage.getItem('name');
    if (localStorageName) {
      setPreviousName(localStorageName);
    }
    const localStorageEmail = localStorage.getItem('email');
    if (localStorageEmail) {
      setPreviousEmail(localStorageEmail);
    }
  }, [handleSubmit]);

  const handleUserName = (e) => {
    const value = e.target.value;
    const err = e.target.validationMessage;
    setName(value);
    if (value !== previousName && !err) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  const handleUserEmail = (e) => {
    const value = e.target.value;
    const err = e.target.validationMessage;

    setEmail(value);
    if (value !== previousEmail && !err) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return (
    <section className='profile'>
      <form className='profile__form' onSubmit={handleSubmit}>
        <div className='profile__shell-top'>
          <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
          <ul className='profile__list'>
            <li className='profile__item'>
              <span className='profile__item-text'>Имя</span>
              <input
                className='profile__input'
                type={'text'}
                name='name'
                placeholder='Ваше Имя'
                minLength='4'
                maxLength='30'
                value={name}
                onChange={handleUserName}
                required
              />
            </li>
            <li className='profile__item'>
              <span className='profile__item-text'>email</span>
              <input
                className='profile__input'
                type={'text'}
                name='email'
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                placeholder='Ваш email'
                minLength={2}
                value={email}
                onChange={handleUserEmail}
                autoComplete='off'
                required
              />
            </li>
            <span className='profile__err'>{}</span>
          </ul>
        </div>
        <span className='profile__msg'>{requestStatusText}</span>
        <div className='profile__shell-bot'>
          <button
            className='profile__button opacityEffect'
            type='submit'
            disabled={!isDisabled}
          >
            Редактировать
          </button>
          <button
            className='profile__button profile__button-logout opacityEffect'
            type='button'
            onClick={onSignout}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
