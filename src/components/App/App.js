import React, { useState, useEffect } from 'react';
import {
  Route,
  Switch,
  useHistory,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import mainApi from '../../utils/MainApi';

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMoviesUser, setSavedMoviesUser] = useState([]);
  const [isRegisterSending, setRegisterSending] = useState(true);
  const [isRegisterStatus, setRegisterStatus] = useState({});

  const [isLoginSending, setLoginSending] = useState(true);
  const [isLoginStatus, setLoginStatus] = useState({});

  const [isProfileSending, setProfileSending] = useState(false);
  const [isProfileStatus, setProfileStatus] = useState({});

  const [message, setMessage] = useState('');

  const history = useHistory();
  const { pathname } = useLocation();

  const handleRegister = (user) => {
    setRegisterSending(false);
    mainApi
      .register(user)
      .then(() => {
        handleLogin({
          email: user.email,
          password: user.password,
        });
      })
      .catch((err) => {
        if (err.statusCode === 409) {
          setRegisterStatus({
            message: 'email busy',
          });
        } else {
          setRegisterStatus({
            message: 'register error',
          });
        }
      })
      .finally(() => {
        setRegisterSending(true);
      });
  };
  const handleLogin = (data) => {
    setLoginSending(false);
    mainApi
      .authorize(data)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        history.push('/movies');
      })
      .catch((err) => {
        if (err.statusCode === 401) {
          setLoginStatus({
            message: 'wrong log or pass',
          });
        } else if (err.statusCode === 400) {
          setLoginStatus({
            message: 'token broken',
          });
        } else {
          setLoginStatus({
            message: 'Ошибка авторизации',
          });
        }
      })
      .finally(() => {
        setLoginSending(true);
      });
  };

  const handleProfileEdit = (user) => {
    setProfileStatus({});
    setProfileSending(true);
    mainApi
      .editUser(user)
      .then((newUser) => {
        setCurrentUser(newUser);
        setProfileStatus({
          message: 'Профиль обновлён',
        });
      })
      .catch((err) => {
        if (err.statusCode === 409) {
          setProfileStatus({
            message: 'Пользователь с таким email уже существует',
          });
        } else {
          setProfileStatus({
            message: 'При обновлении профиля произошла ошибка',
          });
        }
      })
      .finally(() => {
        setProfileSending(false);
      });
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.clear()
    setLoginStatus({});
    setRegisterStatus({});
    setProfileStatus({});
    history.push('/');
  };

  const handleCardLike = (movie) => {
    mainApi
    .postMovie(movie)
    .then((newMovie) => {
      setSavedMoviesUser((movies) => [newMovie, ...movies]);
      newMovie.isLiked = true;
      })
      .catch(() => {
        setMessage('При сохранении фильма произошла ошибка');
      });
  };

  const handleCardDelete = (movie) => {
    mainApi.deleteMovies(movie)
      .then(() => {
        setSavedMoviesUser((movies) => movies.filter((m) => m._id !== movie._id));
      })
      .catch(() => {
        setMessage('При удалении фильма произошла ошибка');
      })
    };


  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .validateToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push(pathname);
          }
        })
        .catch(() => {
          setMessage('Пользовательский формат токена неверен');
        });
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUser()
        .then((user) => {
          setCurrentUser(user.user);
        })
        .catch(() => {
          setMessage('Ошибка авторизации');
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .getMovies(jwt)
        .then((data) => {
          setSavedMoviesUser(data.filter((i) => i.owner === currentUser._id));
        })
        .catch(() => {
          setMessage('Ошибка при загрузке сохраненных фильмов');
        });
    }
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header loggedIn={loggedIn} />

        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>

          <ProtectedRoute
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            cards={savedMoviesUser}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />

          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            cards={savedMoviesUser}
            onCardDelete={handleCardDelete}
          />

          <ProtectedRoute
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            onSignout={handleSignOut}
            onProfileEdit={handleProfileEdit}
            isSending={isProfileSending}
            requestStatus={isProfileStatus}
            currentUser={currentUser}
          />

          <Route path='/login'>
            {loggedIn ? (
              <Redirect to='/' />
            ) : (
              <Login
                onLogin={handleLogin}
                requestStatus={isLoginStatus}
              />
            )}
          </Route>

          <Route path='/signup'>
            {loggedIn ? (
              <Redirect to='/' />
            ) : (
              <Register
                onRegister={handleRegister}
                requestStatus={isRegisterStatus}
              />
            )}
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
