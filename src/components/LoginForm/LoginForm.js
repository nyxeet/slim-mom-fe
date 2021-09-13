import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import classNames from 'classnames';
import { authOperations } from '../../redux/auth';

import styles from './LoginForm.module.css';

export default function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = ({ target }) => {
    const { name, value } = target;

    switch (name) {
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

    if (login === '' || password === '') {
      console.log('Login or Password is incorrect');
      return;
    }

    dispatch(authOperations.login({ login, password }));
    clearForm();
  };

  const clearForm = () => {
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
          withoutLink={true}
        >
          Вход
        </Button>

        <Button
          type="button"
          active={false}
          link={true}
          linkTo="/registration"
          registrationLink={true}
          withLink={true}
        >
          Регистрация
        </Button>
      </div>
    </div>
  );
}
