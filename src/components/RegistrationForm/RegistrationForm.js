import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import classNames from 'classnames';
import { authOperations } from '../../redux/auth';

import styles from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'login':
        setLogin(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const onSubmitForm = event => {
    event.preventDefault();

    if (name === '' || login === '' || password === '') {
      console.log('Name or Login or Password is incorrect');
      return;
    }

    dispatch(authOperations.registration({ name, login, password }));
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setLogin('');
    setPassword('');
  };

  return (
    <div className={classNames(styles.FormWrapper)}>
      <form onSubmit={onSubmitForm} className={styles.Form} id="form">
        <div className={styles.Wrapper}>
          <input
            className={styles.Input}
            type="text"
            name="name"
            value={name}
            onChange={onChangeInput}
            autoComplete="off"
            placeholder=" "
            id="name"
          ></input>

          <label className={styles.Label} htmlFor="name">
            Имя *
          </label>
        </div>
        <div className={styles.Wrapper}>
          <input
            className={styles.Input}
            type="text"
            name="login"
            value={login}
            onChange={onChangeInput}
            autoComplete="off"
            placeholder=" "
            id="login"
          ></input>

          <label className={styles.Label} htmlFor="login">
            Логин *
          </label>
        </div>
        <div className={classNames(styles.Wrapper, styles.TheLastOne)}>
          <input
            className={styles.Input}
            type="password"
            name="password"
            value={password}
            onChange={onChangeInput}
            autoComplete="off"
            placeholder=" "
            id="password"
          ></input>
          <label className={styles.Label} htmlFor="password">
            Пароль *
          </label>
        </div>
      </form>

      <div className={classNames(styles.BtnWrapper)}>
        <Button
          type="submit"
          active={true}
          form="form"
          mr="mr"
          loginLink={true}
          link={true}
          linkTo="/login"
        >
          Вход
        </Button>

        <Button type="button" active={false}>
          Регистрация
        </Button>
      </div>
    </div>
  );
}
