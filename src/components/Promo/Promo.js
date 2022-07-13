import React from 'react';
import imgLand from '../../images/landingImg.png';

import './Promo.css'

function Promo() {
  return (
    <section className='promo'>
    <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
    <img className='promo__img' src={imgLand} alt="logo"></img>
  </section>
  );
}

export default Promo;
