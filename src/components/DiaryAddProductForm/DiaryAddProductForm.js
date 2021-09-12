import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import Button from '../Button';
import productsSelectors from '../../redux/products/products-selectors';
import productsOperations from '../../redux/products/products-operations';
import { diaryLink } from '../../routes';
import AsyncSelect from 'react-select/async';

import styles from './DiaryAddProductForm.module.css';

export default function DiaryAddProductForm() {
  const [productName, setProductName] = useState('');
  const [productId, setProductId] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const date = useSelector(productsSelectors.getDate);
  const dispatch = useDispatch();

  const onChangeWeight = ({ target }) => {
    setProductWeight(target.value);
  };

  const handleInputChange = value => {
    setProductId(value ? value.id : value);
    setProductName(value);
  };

  const promiseOptions = inputValue => {
    const normalizedQuerry = inputValue.replace(/[\])}[{(]/g, '');
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          productsOperations.getAllProducts(normalizedQuerry).then(data =>
            data.map(item => {
              return { label: item.title.ru, id: item._id };
            }),
          ),
        );
      }, 1000);
    });
  };

  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      paddingLeft: 0,
    }),
    control: () => ({
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  const onSubmitForm = async event => {
    event.preventDefault();

    if (!productId) {
      await productsOperations.getAllProducts(productName).then(res => {
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

    const newProduct = {
      productId,
      date,
      weight: Number(productWeight),
    };

    dispatch(productsOperations.addProduct(newProduct));

    clearForm();
  };

  const clearForm = () => {
    setProductName('');
    setProductWeight('');
  };

  return (
    <section className={styles.AddFormSection}>
      <form onSubmit={onSubmitForm} className={styles.Form} id="form">
        <AsyncSelect
          placeholder={'Введите имя продукта'}
          styles={customStyles}
          isClearable
          className={classNames(styles.Input)}
          cacheOptions
          loadOptions={promiseOptions}
          defaultOptions
          onChange={handleInputChange}
          value={productName}
        />
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

        <Button
          type="submit"
          active={true}
          hide={true}
          link={true}
          linkTo={diaryLink}
        >
          Добавить
        </Button>
      </form>
    </section>
  );
}
