import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import RegistrationForm from '../../components/RegistrationForm';

import styles from './RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <section className={styles.LoginPage}>
      <Container>
        <div>Header</div>

        <main className={styles.Hero}>
          <h1 className={styles.Title}>Регистрация</h1>
          <RegistrationForm />
        </main>
      </Container>
    </section>
  );
}
