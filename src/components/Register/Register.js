import React, { useEffect } from 'react';
import Form from '../Form/Form';

import useFormValidity from '../../utils/FormValidity';

import './Register.css';

function Register({ onRegister, requestStatus }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormValidity();
  const isDisabled = !isValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };
  useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm]);

  return (
    <section className='register'>
      <Form
        loginForm={false}
        onSumbit={handleSubmit}
        header={'Добро пожаловать!'}
        btnName={'Зарегистрироваться'}
        caption={'Уже зарегистрированы?'}
        link={'Войти'}
        path={'/login'}
        onChangeName={handleChange}
        onChangeEmail={handleChange}
        onChangePassword={handleChange}
        isDisabled={isDisabled}
        requestStatus={requestStatus}
        errors={errors}
      />
    </section>
  );
}

export default Register;
