import React from 'react';
import './Portfolio.css'

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
<ul className='portfolio__list'>
        <li className='portfolio__list_item'>
          <a className='portfolio__list_link opacityEffect' href='https://stswm.github.io/how-to-learn/' target={'_blank'}>Статичный сайт</a>
        </li>
        <li className='portfolio__list_item'>
          <a className='portfolio__list_link opacityEffect' href='https://stswm.github.io/russian-travel/' target={'_blank'}>Адаптивный сайт</a>
        </li>
        <li className='portfolio__list_item'>
          <a className='portfolio__list_link opacityEffect' href='http://stswm.nomoredomains.xyz/signin' target={'_blank'}>Одностраничное приложение</a>
        </li>
</ul>
    </section>
  );
}
export default Portfolio;
