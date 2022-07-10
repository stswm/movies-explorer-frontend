import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard({ card, onCardLike, onCardDelete }) {
  const [isMovieLiked, setMoviesLike] = useState(card.check);
  const [isCardDelete, setCardDelete] = useState(false);

  const handleMoviesLiked = () => {
    if (!isMovieLiked) {
      setMoviesLike(true);
      onCardLike(card);
    } else {
      setMoviesLike(false);
      onCardDelete(card);
    }
  };
  const handleMovieDelete = () => {
    onCardDelete(card);
    setCardDelete(true);
  };

  return (
    <li className={!isCardDelete ? 'card' : 'card card_deleted'}>
      <img src={card.image} alt={card.title} className='card__image'></img>
      <div className='card__elements'>
        <p className='card__title'>{card.title}</p>
        <Switch>
          <Route path='/movies'>
            <button
              className={
                !isMovieLiked
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
      <p className='card__duration'>{card.duration}</p>
    </li>
  );
}

export default MoviesCard;
