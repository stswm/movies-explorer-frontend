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
import movieList from '../../utils/SaveMovieList';

import './App.css';

function App() {
  // const [loggedIn, setLoggedIn] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLikeMovies = (card) => {
    if (!movieList.includes(card)) {
      movieList.push(card);
      card.check = true
    }
  };
  
  const handleDeleteMovies = (card) => {
    if (movieList.includes(card)) {
      movieList.splice(movieList.indexOf(card), 1);
      card.check = false
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
            onCardDelete={handleDeleteMovies}
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
