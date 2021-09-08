import React from 'react';
import styles from './DiaryPage.module.css';
import RightSideBar from '../../components/RightSideBar';
import DiaryDateCalendar from '../../components/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryAddProductList from '../../components/DiaryProductsList';

const DiaryPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.left}>
        <div>Header1</div>
        <div className={styles.containerLeft}>
          <DiaryDateCalendar />
          <DiaryAddProductForm />
          <DiaryAddProductList />
        </div>
      </div>
      <div className={styles.right}>
        <div>Header2</div>
        <div className={styles.containerRight}>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;
