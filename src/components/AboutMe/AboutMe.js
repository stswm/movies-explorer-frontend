import React from 'react';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__shell'>
        <div className='about-me__info'>
          <p className='about-me__name'>Oleg</p>
          <p className='about-me__about'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__description'>
            Рожденный в СССР, выросший в Санкт-Петербурге, вечно молодой. Учился
            на инженера связи но кривая жизни увела на заработки. В 2021г начал учится на Web разработчика. В свободное время ем (=
            Люблю готовить и есть.
            Ну и, само собой, авто  мото - моя страсть.
          </p>

          <ul className='about-me__links'>
            <li className='about-me__link'>
              <a
                className='about-me__item opacityEffect'
                href='https://www.facebook.com'
                target={'_blank'}
              >
                Facebook
              </a>
            </li>
            <li className='about-me__link'>
              <a
                className='about-me__item opacityEffect'
                href='https://github.com/stswm'
                target={'_blank'}
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className='about-me__img-shell'></div>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
