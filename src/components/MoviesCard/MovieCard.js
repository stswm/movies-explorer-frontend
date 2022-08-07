import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MoviesApiUrl } from '../../utils/constants';
import './MoviesCard.css';

function MoviesCard({ card, cards, onCardLike, onCardDelete, setInitiaSavedlMovies,movies }) {
  const isLiked = movies.some((e) => e.movieId == card.id)
  
  const handleMoviesLiked = () => {
    if (isLiked) {
      const currentMovie = movies.find(item => item.movieId == card.id)
      onCardDelete(currentMovie)
    } else if (!isLiked) {
      onCardLike({
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: `${MoviesApiUrl}${card.image.url}`,
        trailerLink: card.trailerLink,
        thumbnail: `${MoviesApiUrl}${card.image.formats.thumbnail.url}`,
        movieId: `${card.id}`,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
        isLiked: true,
      });
    }
  };

  function getMovieDuration(mins) {
    return `${Math.floor(mins / 60)}ч ${mins % 60}м`;
  }
  
  const handleMovieDelete = () => {
    onCardDelete(card);
    setInitiaSavedlMovies(cards)
  };

  return (
    <li className='card'>
      <Switch>
        <Route path='/movies'>
          <a href={card.trailerLink} target={"_blank"}>
          <img
            src={`${MoviesApiUrl}${card.image.url}`}
            alt={card.nameRU}
            className='card__image'
          />
          </a>
        </Route>
        <Route path='/saved-movies'>
          <a href={card.trailerLink} target={"_blank"}>
          <img src={card.image} alt={card.nameRU} className='card__image' />
          </a>
        </Route>
      </Switch>
      <div className='card__elements'>
        <p className='card__title'>{card.nameRU}</p>
        <Switch>
          <Route path='/movies'>
            <button
              className={
                !isLiked
                  ? `movies-card__button movies-card__button_type_save opacityEffect`
                  : `movies-card__button movies-card__button_type_save-active opacityEffect`
              }
              onClick={handleMoviesLiked}
              type='button'
            ></button>
          </Route>
          <Route path='/saved-movies'>
            <button
              className='movies-card__button movies-card__button-type-delete opacityEffect'
              onClick={handleMovieDelete}
              type='button'
            ></button>
          </Route>
        </Switch>
      </div>
      <p className='card__duration'>{getMovieDuration(card.duration)}</p>
    </li>
  );
}

export default MoviesCard;
