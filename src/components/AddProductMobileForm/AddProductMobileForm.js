import React from 'react';
import Container from '../../components/Container';
import DiaryAddProductForm from '../DiaryAddProductForm/DiaryAddProductForm';

import styles from './AddProductMobileForm.module.css';

export default function AddProductMobileForm() {
  return (
    <Container>
      <div>Header1</div>
      <div>Header2</div>

      <div className={styles.HeroWrapper}>
        <DiaryAddProductForm />
      </div>
    </Container>
  );
}
