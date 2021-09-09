import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import fetch from '../../services/api';

// import productsOperations from '../../redux/products/products-operations';
// import productsSelectors from '../../redux/products/products-selectors';

import styles from './DiaryAddProductForm.module.css';

export default function DiaryAddProductForm() {
  const [productName, setProductName] = useState('');
  const [productId, setProductId] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [productList, setProductList] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const onChangeWeight = ({ target }) => {
    setProductWeight(target.value);
  };

  const onChangeProductInput = async ({ target: { value } }) => {
    setProductName(value);
    setIsVisible(true);
    // const normalizedQuerry = target.value.replace(/[\])}[{(]/g, '');
    await fetch.getAllProducts(value).then(setProductList);
  };
  // как искать на серваке продукт без учета скобок?
  const onProductClick = event => {
    const { id, title } = event.target;

    setProductId(id);
    setProductName(title);
    setIsVisible(false);
  };

  const onSubmitForm = async event => {
    event.preventDefault();

    if (!productId) {
      await fetch.getAllProducts(productName).then(res => {
        if (res.length > 1) {
          alert('Выберите 1 продукт');
          return;
        }

        if (res.length === 0) {
          alert('Нет продукта соответствующему поиску');
          return;
        }

        if (res.length === 1) {
          const id = res[0]._id;
          productId(id);
        }
      });
    }

    if (!productWeight) {
      alert('Выберите вес продукта');
      return;
    }

    console.log('====================================');
    console.log('productId:', productId);
    console.log('productWeight:', productWeight);
    console.log('====================================');

    clearForm();
  };

  // сделать редюсер на отправку id, weight на сервер, а получение данных записать в глобальный стор

  const clearForm = () => {
    setProductName('');
    setProductWeight('');
    setProductList([]);
    setIsVisible(true);
  };

  return (
    <form onSubmit={onSubmitForm} className={styles.Form} id="form">
      <div className={classNames(styles.productWrapper)}>
        <input
          className={classNames(styles.Input)}
          type="text"
          name="productName"
          value={productName}
          onChange={onChangeProductInput}
          autoComplete="off"
          placeholder=" "
          id="productName"
        ></input>

        <label className={styles.Label} htmlFor="productName">
          Введите название продукта
        </label>

        {productList.length > 0 && isVisible && (
          <div className={styles.FindBox}>
            <ul className={styles.Findlist} role="menu">
              {productList.map(({ _id, title }) => (
                <li
                  onClick={onProductClick}
                  title={title.ru}
                  key={_id}
                  id={_id}
                  className={styles.Findlist__item}
                >
                  {title.ru}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className={classNames(styles.weightWrapper)}>
        <input
          className={classNames(styles.Input)}
          type="number"
          name="productWeight"
          value={productWeight}
          onChange={onChangeWeight}
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
