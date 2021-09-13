import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import classNames from 'classnames';
import { authOperations } from '../../redux/auth';
import dailyRateSelectors from '../../redux/dailyRate/dailyRateSelectors';
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

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  console.log(userInfo);

  const calories = useSelector(dailyRateSelectors.getCalories);
  const products = useSelector(dailyRateSelectors.getProducts);
  const filteredProducts = products
    .map(product => product.categories[0])
    .filter((item, index, arr) => arr.indexOf(item) === index);

  console.log(filteredProducts);
  console.log(products);

  const onSubmitForm = event => {
    event.preventDefault();

    if (name === '' || login === '' || password === '') {
      console.log('Name or Login or Password is incorrect');
      return;
    }

    if (userInfo) {
      dispatch(
        authOperations.registration({
          name,
          login,
          password,
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
      dispatch(authOperations.registration({ name, login, password }));
    }
    localStorage.removeItem('userInfo');
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

        <Button type="submit" active={false} form="form" withoutLink={true}>
          Регистрация
        </Button>
      </div>
    </div>
  );
}
