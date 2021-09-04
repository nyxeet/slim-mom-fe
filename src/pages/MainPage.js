import React from 'react';
import styles from './MainPage.module.css';
import Container from '../components/Container';
import DailyCaloriesForm from '../components/DailyCaloriesForm';

const MainPage = () => {
  return (
    <div className={styles.background}>
      <Container>
        <DailyCaloriesForm />
      </Container>
    </div>
  );
};

export default MainPage;
