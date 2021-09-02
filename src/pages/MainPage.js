import React from 'react';
import styles from './MainPage.module.css';
import Container from '../components/container';

const MainPage = () => {
  return (
    <div className={styles.background}>
      <Container>
        <h1>Main page</h1>
      </Container>
    </div>
  );
};

export default MainPage;
