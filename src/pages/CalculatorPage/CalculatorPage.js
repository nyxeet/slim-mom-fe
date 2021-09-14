import React from 'react';
import styles from './CalculatorPage.module.css';
import CalculatorCalorieForm from '../../components/CalculatorCalorieForm';
import Container from '../../components/Container';
import RightSideBar from '../../components/RightSideBar';
import dailyOperetions from './../../redux/dailyRate/dailyRateOperations';
import { useDispatch } from 'react-redux';

const CalculatorPage = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, { resetForm }) => {
    dispatch(dailyOperetions.onFetchDailyRatesAuth(values));
    resetForm({ values: '' });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.left}>
        <div className={styles.containerLeft}>
          <CalculatorCalorieForm onSubmit={onSubmit} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.containerRight}>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
