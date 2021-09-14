import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import classNames from 'classnames';
import { authOperations } from '../../redux/auth';
import dailyRateSelectors from '../../redux/dailyRate/dailyRateSelectors';
import styles from './RegistrationForm.module.css';
import { Formik, Field, Form } from 'formik';
import Validation from './RegistrationValidation';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const calories = useSelector(dailyRateSelectors.getCalories);
  const products = useSelector(dailyRateSelectors.getProducts);
  const filteredProducts = products
    .map(product => product.categories[0])
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const onSubmitForm = values => {
    if (userInfo) {
      dispatch(
        authOperations.registration({
          ...values,
          userData: {
            height: userInfo.height,
            age: userInfo.age,
            currentWeight: userInfo.weight,
            goalWeight: userInfo.newWeight,
            bloodGroup: userInfo.bloodGroup,
            dailyCalorieIntake: calories.toString(),
            notAllowedProducts: filteredProducts,
          },
        }),
      );
    } else {
      dispatch(authOperations.registration(values));
    }
    localStorage.removeItem('userInfo');
  };

  return (
    <div className={classNames(styles.FormWrapper)}>
      <Formik
        initialValues={{ name: '', login: '', password: '' }}
        validationSchema={Validation}
        onSubmit={onSubmitForm}
        render={({ errors, touched, values }) => (
          <Form className={styles.Form}>
            <div className={styles.Wrapper}>
              <Field className={styles.Input} type="text" name="name"></Field>

              <label className={styles.Label} htmlFor="name">
                Имя *
              </label>
              {errors.name && touched.name && (
                <div className={styles.fieldError}>{errors.name}</div>
              )}
            </div>
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
                type="button"
                active={true}
                mr="mr"
                loginLink={true}
                link={true}
                linkTo="/login"
                withLink={true}
              >
                Вход
              </Button>

              <Button type="submit" active={false} withoutLink={true}>
                Регистрация
              </Button>
            </div>
          </Form>
        )}
      />
    </div>
  );
}
