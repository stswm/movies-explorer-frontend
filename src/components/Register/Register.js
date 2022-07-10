import React, { useState } from 'react';
import Form from '../Form/Form';
import './Register.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function passChange(e) {
    setPassword(e.target.value);
  }

  return (
    <section className='register'>
      <Form
        loginForm={false}
        header={'Добро пожаловать!'}
        btnName={'Зарегистрироваться'}
        caption={'Уже зарегистрированы?'}
        link={'Войти'}
        path={'/signup'}
      />
    </section>
  );
}
