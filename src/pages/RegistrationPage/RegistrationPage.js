import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import RegistrationForm from '../../components/RegistrationForm';

import styles from './RegistrationPage.module.css';

import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import getLoader from './../../redux/loader/loader-selectors';

export default function RegistrationPage() {
  const loader = useSelector(getLoader);
  return (
    <section className={styles.LoginPage}>
      <Container>
        <div>Header</div>

        <main className={styles.Hero}>
          <h1 className={styles.Title}>Регистрация</h1>
          <RegistrationForm />
          {loader && <Loader />}
        </main>
      </Container>
    </section>
  );
}
