import React from 'react';
import img from '../../images/avatar.jpg';
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
          <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>

          <ul className='about-me__links'>
            <li className='about-me__link'>
              <a className='about-me__item opacityEffect' href='https://www.facebook.com' target={'_blank'}>Facebook</a>
            </li>
            <li className='about-me__link'>
              <a className='about-me__item opacityEffect' href='https://github.com/stswm' target={'_blank'}>Github</a>
            </li>
          </ul>
        </div>
        <img className='about-me__img' src={img} alt='Фотография студента' />
      </div>
      <Portfolio/>
    </section>
  );
}

export default AboutMe;
