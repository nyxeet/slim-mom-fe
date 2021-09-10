import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import RightSideBar from '../../components/RightSideBar';
import DiaryDateCalendar from '../../components/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryAddProductList from '../../components/DiaryProductsList';
import AddProductMobileForm from '../../components/AddProductMobileForm';
import Header from '../../components/Header';
import styles from './DiaryPage.module.css';

const DiaryPage = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.left}>
          <Header />
          <div className={styles.containerLeft}>
            <DiaryDateCalendar />
            <DiaryAddProductForm />
            <DiaryAddProductList />

            <button className={styles.BtnWrapper} type="submit">
              <Link to="/add-product">
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
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div>Header2</div>
          <div className={styles.containerRight}>
            <RightSideBar />
          </div>
        </div>
      </div>

      <Route path="/add-product" component={AddProductMobileForm} />
    </>
  );
};

export default DiaryPage;
