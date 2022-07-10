import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css'

function Header({ loggedIn }) {
  return (
    <Switch>
      <Route exact path='/'>
        <header className='header header-main'>
          <div className='header__shell'>
            <Link className='header__logo opacityEffect' to='/'>
              <img src={logo} alt='Логотип сайта' />
            </Link>
            <Navigation loggedIn={loggedIn} />
          </div>
        </header>
      </Route>
      <Route exact path='/(|movies|saved-movies|profile)'>
        <header className='header'>
          <div className='header__shell'>
            <Link className='header__logo opacityEffect' to='/'>
              <img src={logo} alt='Логотип сайта' />
            </Link>
            <Navigation loggedIn={loggedIn} />
          </div>
        </header>
      </Route>
    </Switch>
  );
}

export default Header;
