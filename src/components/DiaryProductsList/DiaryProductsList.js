import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import productsSelectors from '../../redux/products/products-selectors';
import productsOperations from '../../redux/products/products-operations';

import styles from './DiaryProductsList.module.css';

export default function DiaryProductsList() {
  const productList = useSelector(productsSelectors.getProductList);
  const date = useSelector(productsSelectors.getDate);
  const dispatch = useDispatch();

  useEffect(() => {
    if (date?.length > 0) {
      dispatch(productsOperations.getDayProducts({ date }));
    }
  }, [dispatch, date]);

  const removeProduct = id => {
    dispatch(productsOperations.removeProduct({ productId: id, date: date }));
  };

  return (
    <div className={styles.Wrapper}>
      {productList?.length > 0 ? (
        <ul className={styles.List}>
          {productList.map(({ title: { ru }, calories, weight, id }) => {
            const ccal = Math.round(calories);
            return (
              <li className={styles.ListItem} key={id}>
                <p className={classNames(styles.Text, styles.Name)}>{ru}</p>
                <p className={classNames(styles.Text, styles.Weight)}>
                  {weight} г
                </p>
                <p className={classNames(styles.Text, styles.Ccal)}>
                  {ccal} ккал
                </p>
                <p className={styles.CloseIconWrapper}>
                  <svg
                    onClick={() => removeProduct(id)}
                    width="14"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.CloseSVG}
                  >
                    <path d="M1 1l12 12M1 13L13 1" strokeWidth="2" />
                  </svg>
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>Ваш список пуст</div>
      )}
      <div className={styles.HiddenBar}></div>
    </div>
  );
}
