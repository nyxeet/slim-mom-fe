import React, { useEffect } from 'react';
import styles from './RightSideBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import userOperations from './../../redux/user-info/userInfoOperations';
import userSelectors from './../../redux/user-info/userInfoSelector';
import productsSelectors from './../../redux/products/products-selectors';
import format from 'date-fns/format';

const RightSideBar = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(userOperations.onFetchCurrentUser()), []);

  const userData = useSelector(userSelectors.getUserData);
  let products = userData.notAllowedProducts;
  if (products && products.every(item => typeof item !== 'string')) {
    products = products
      .map(product => product.categories[0])
      .filter((item, index, arr) => arr.indexOf(item) === index);
  }
  const dailyNorm = userData.dailyCalorieIntake;
  let date = useSelector(productsSelectors.getDate);
  if (date) {
    date = date.split('-');
  }
  const consumedCalories = useSelector(
    productsSelectors.getTotalDailyCcal,
  ).toFixed(2);
  const left =
    dailyNorm - consumedCalories > 0
      ? (dailyNorm - consumedCalories).toFixed(2)
      : 0;

  const percent = ((consumedCalories / dailyNorm) * 100).toFixed(2);
  return (
    <div className={styles.RightSideBarContainer}>
      <div className={styles.RightSideBarSummary}>
        <h2 className={styles.RightSideBarHeader}>
          Сводка за{' '}
          {date
            ? `${date[1]}.${date[0]}.${date[2]}`
            : format(new Date(), 'dd.MM.yyyy')}
        </h2>
        <div className={styles.RightSideBarStatictics}>
          <ul className={styles.RightSideBarParams}>
            <li className={styles.RightSideBarItem}>Осталось</li>
            <li className={styles.RightSideBarItem}>Употреблено</li>
            <li className={styles.RightSideBarItem}>Дневная норма</li>
            <li className={styles.RightSideBarItem}>n% от нормы</li>
          </ul>
          <ul>
            <li className={styles.RightSideBarItem}>
              {left ? left : '000'} ккал
            </li>
            <li className={styles.RightSideBarItem}>
              {consumedCalories ? consumedCalories : '000'} ккал
            </li>
            <li className={styles.RightSideBarItem}>
              {dailyNorm ? dailyNorm : '000'} ккал
            </li>
            <li className={styles.RightSideBarItem}>
              {isNaN(percent) || percent === 'Infinity' ? '0' : percent} %
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.RightSideBarSummary}>
        <h2 className={styles.RightSideBarHeader}>Нерекомендуемые продукты</h2>
        {products && products.length > 0 ? (
          <p className={styles.ProductsList}>{products.join(', ')}</p>
        ) : (
          <p className={styles.RightSideBarItem}>
            Здесь будет отображаться Ваш рацион
          </p>
        )}
      </div>
    </div>
  );
};

export default RightSideBar;
