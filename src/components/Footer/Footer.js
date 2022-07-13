import React from 'react';
import { Route } from 'react-router-dom';

import './Footer.css'

function Footer() {
  return (
    <Route path='/(|movies|saved-movies)'>
      <footer className='footer'>
        <h3 className='footer__title'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className='footer__shell'>
          <p className='footer__date'>&copy; {new Date().getFullYear()}</p>
          <ul className='footer__links'>
            <li className='footer__link'>
              <a
                className='footer__link_item opacityEffect'
                target='_blank'
                href='https://practicum.yandex.ru/'
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__link'>
              <a
                className='footer__link_item opacityEffect'
                target='_blank'
                href='https://github.com/stswm'
              >
                Github
              </a>
            </li>
            <li className='footer__link'>
              <a
                className='footer__link_item opacityEffect'
                target='_blank'
                href='https://www.facebook.com'
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </Route>
  );
}

export default Footer;
