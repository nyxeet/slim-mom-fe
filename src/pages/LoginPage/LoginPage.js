import React from 'react';
import Container from '../../components/Container';
import LoginForm from '../../components/LoginForm';

import styles from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <section className={styles.LoginPage}>
      <Container>

        <main className={styles.Hero}>
          <h1 className={styles.Title}>Вход</h1>
          <LoginForm />
        </main>
      </Container>
    </section>
  );
}
