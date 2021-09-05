import React from 'react';
import styles from './CalculatorPage.module.css';
import CalculatorCalorieForm from '../../components/CalculatorCalorieForm';
import Container from '../../components/Container';
import RightSideBar from '../../components/RightSideBar';

const CalculatorPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.left}>
        <div className={styles.containerLeft}>
          <CalculatorCalorieForm />
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
