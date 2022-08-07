import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation({ loggedIn }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  return (
    <nav className='navigation'>
      {!loggedIn ? (
          <>
            <Link className='navigation__user_register' to="/signup"> Регистрация </Link>
            <Link className='navigation__user_login' to="/login"> Войти </Link>
          </>
        ) : (
          <div className='navigation__menu'>
<div className='navigation__menu_shell'>
              <NavLink className='navigation__link opacityEffect' activeClassName="navigation__link_active" to="/movies"> Фильмы </NavLink>
              <NavLink className='navigation__link opacityEffect' activeClassName="navigation__link_active" to="/saved-movies"> Сохранённые фильмы </NavLink>
</div>
            <Link className='navigation__link navigation__user-profile opacityEffect' to="/profile"> Аккаунт </Link>
            <button className='navigation__btn opacityEffect' onClick={handleMenuOpen} type="button"></button>
          </div>
        )
      }

      <div className={`navigation__mobile-menu mobile-menu ${isMenuOpen ? "mobile-menu_isOpen" : ""}`}>
        <div className="mobile-menu__links">
          <button className="mobile-menu__closeBtn opacityEffect" onClick={handleMenuClose} type="button"></button>
          <NavLink className="mobile-menu__link opacityEffect" activeClassName="mobile-menu__link_active" exact to="/" onClick={handleMenuClose}>Главная</NavLink>
          <NavLink className="mobile-menu__link opacityEffect" activeClassName="mobile-menu__link_active" to="/movies" onClick={handleMenuClose}>Фильмы</NavLink>
          <NavLink className="mobile-menu__link opacityEffect" activeClassName="mobile-menu__link_active" to="/saved-movies" onClick={handleMenuClose}>Сохранённые фильмы</NavLink>
          <Link className="mobile-menu__link mobile-menu__user-profile opacityEffect" to="/profile" onClick={handleMenuClose}>Аккаунт</Link>
        </div>
      </div>

    </nav>
    
  );
}

export default Navigation;