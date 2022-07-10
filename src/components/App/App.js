import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { CurrentUserContext } from '../../context/CurrentUserContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import cards from '../../utils/MoviesList';
import movieList from '../../utils/SaveMovieList'

import './App.css';

function App() {
  // const [loggedIn, setLoggedIn] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLikeMovies = (card) => {
    if (!movieList.includes(card)) {
      card.check = true;
      movieList.push(card);
    }
  };

  const handleDeleteMovies = (card) => {
    const test = movieList.includes(card)
    if (test) {
      card.check = false;
      const test2 = movieList.indexOf(card)
      movieList.splice(test2, 1);
    }
  };

  return (
    // <CurrentUserContext.Provider>
    <div className='page'>
      <Header loggedIn={loggedIn} />

      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>

        <Route path='/movies'>
          <Movies
            cards={cards}
            onCardLike={handleLikeMovies}
          />
        </Route>

        <Route path='/saved-movies'>
          <SavedMovies
            cards={movieList}
            onCardLike={handleLikeMovies}
            onCardDelete={handleDeleteMovies}
          />
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signup'>
          <Register />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
