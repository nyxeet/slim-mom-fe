import React from 'react';
import Container from '../../components/Container';
import LoginForm from '../../components/LoginForm';

import styles from './LoginPage.module.css';

import Loader from '../../components/Loader';
import getLoader from './../../redux/loader/loader-selectors';
import { useSelector } from 'react-redux';

export default function LoginPage() {
  const loader = useSelector(getLoader);
  return (
    <section className={styles.LoginPage}>
      <Container>
        <main className={styles.Hero}>
          <h1 className={styles.Title}>Вход</h1>
          <LoginForm />
          {loader && <Loader />}
        </main>
      </Container>
    </section>
  );
}
