import React from 'react';
import { Link } from 'react-router-dom'
import './NotFound.css';

function NotFound() {
  return (
    <section className='notFound'>
      <div className='notFound__shell'>
        <h1 className='notFound__title'>404</h1>
        <h2 className='notFound__text'>Страница не найдена</h2>
      </div>
      <Link to="/" className="notFound__link">Назад</Link>
    </section>
  );
}

export default NotFound;