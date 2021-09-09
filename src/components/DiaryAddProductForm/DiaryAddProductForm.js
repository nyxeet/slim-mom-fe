import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import getAllProducts from '../../services/api';
//import { logOut } from '../../redux/auth/auth.operations';
//import { getUserName, isAuthenticated } from '../../redux/auth/auth.selectors';

import productsOperations from '../../redux/products/products-operations';
import productsSelectors from '../../redux/products/products-selectors';

import styles from './DiaryAddProductForm.module.css';

export default function DiaryAddProductForm() {
  const [productName, setProductName] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [productList, setProductList] = useState([]);
  // const dispatch = useDispatch();
  // const allProducts = useSelector(productsSelectors.getContacts);

  const onChangeInput = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'productName':
        setProductName(value);
        break;

      case 'productWeight':
        setProductWeight(value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    // вызываем функцию запроса на сервак
    console.log(productName);
    const data = getAllProducts(productName); // только асинхронность
    setProductList(data);
  }, [productName]);

  const onSubmitForm = event => {
    event.preventDefault();

    // clearForm();
    // dispatch(productsOperations.getProduct(productName));
    // console.log(productName);
    // console.log(productWeight);
  };

  // const clearForm = () => {
  //   setProductName('');
  //   setProductWeight('');
  // };
  // console.log('allProducts:', allProducts);

  return (
    <form onSubmit={onSubmitForm} className={styles.Form} id="form">
      <div className={classNames(styles.productWrapper)}>
        <input
          className={classNames(styles.Input)}
          type="text"
          name="productName"
          value={productName}
          onChange={onChangeInput}
          autoComplete="off"
          placeholder=" "
          id="productName"
        ></input>

        <label className={styles.Label} htmlFor="productName">
          Введите название продукта
        </label>

        {/* <div className={styles.FindBox}>
          {productList.length > 0 && (
            <ul className={styles.Findlist}>
              {productList.map(item => (
                <li key={item} className={styles.Findlist__item}>
                  {item.title.ru}
                </li>
              ))}
            </ul>
          )}
        </div> */}
      </div>
      <div className={classNames(styles.weightWrapper)}>
        <input
          className={classNames(styles.Input)}
          type="number"
          name="productWeight"
          value={productWeight}
          onChange={onChangeInput}
          autoComplete="off"
          placeholder=" "
          id="productWeight"
        ></input>
        <label className={styles.Label} htmlFor="productWeight">
          Граммы
        </label>
      </div>

      <button className={classNames(styles.BtnWrapper)} type="submit">
        <svg
          className={styles.BtnIcon}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
        </svg>
      </button>

      <Button type="submit" active={true} hide={true}>
        Добавить
      </Button>
    </form>
  );
}
