import React, { useEffect } from 'react';
import Form from '../Form/Form';

import useFormValidity from '../../utils/FormValidity';
import './Login.css';

function Login({ onLogin, requestStatus }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormValidity();
    const isDisabled = !isValid;


  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm]);

  return (
    <section className='login'>
      <Form
        loginForm={true}
        onSumbit={handleSubmit}
        header={'Рады видеть!'}
        btnName={'Войти'}
        caption={'Ещё не зарегистрированы?'}
        link={'Регистрация'}
        path={'/signup'}
        onChangeEmail={handleChange}
        onChangePassword={handleChange}
        isDisabled={isDisabled}
        requestStatus={requestStatus}
        errors={errors}
      />
    </section>
  );
}

export default Login;
