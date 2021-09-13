import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import { diaryLink } from '../../routes';
import styles from './AddProductPage.module.css';

export default function AddProductMobileForm() {
  return (
    <Container>
      <Link to={diaryLink}>
        <svg
          className={styles.BackIcon}
          width="15"
          height="9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1.5v3H2m0 0L5.5 1M2 4.5L5.5 8"
            stroke="#000"
            strokeWidth="2"
          />
        </svg>
      </Link>

      <DiaryAddProductForm />
    </Container>
  );
}
