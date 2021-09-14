import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import classNames from 'classnames';
import { authOperations } from '../../redux/auth';

import styles from './LoginForm.module.css';
import { Formik, Field, Form } from 'formik';
import Validation from './LoginValidation';

export default function LoginForm() {
  const dispatch = useDispatch();

  const onSubmitForm = values => {
    dispatch(authOperations.login(values));
  };

  return (
    <div className={classNames(styles.FormWrapper)}>
      <Formik
        initialValues={{ login: '', password: '' }}
        validationSchema={Validation}
        onSubmit={onSubmitForm}
        render={({ errors, touched, values }) => (
          <Form className={styles.Form}>
            <div className={styles.Wrapper}>
              <Field className={styles.Input} type="email" name="login"></Field>

              <label className={styles.Label} htmlFor="login">
                Логин *
              </label>
              {errors.login && touched.login && (
                <div className={styles.fieldError}>{errors.login}</div>
              )}
            </div>
            <div className={classNames(styles.Wrapper, styles.TheLastOne)}>
              <Field
                className={styles.Input}
                type="password"
                name="password"
              ></Field>
              <label className={styles.Label} htmlFor="password">
                Пароль *
              </label>
              {errors.password && touched.password && (
                <div className={styles.fieldError}>{errors.password}</div>
              )}
            </div>
            <div className={classNames(styles.BtnWrapper)}>
              <Button
                type="submit"
                active={true}
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
          </Form>
        )}
      />
    </div>
  );
}
