import React from 'react';
import Form from '../Form/Form';

import './Login.css';

function Login() {
  return (
    <section className='login'>
      <Form
        loginForm={true}
        header={'Рады видеть!'}
        btnName={'Войти'}
        caption={'Ещё не зарегистрированы?'}
        link={'Регистрация'}
        path={'/signup'}
      />
    </section>
  );
}

export default Login;
