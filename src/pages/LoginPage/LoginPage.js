import React from 'react';
import LoginForm from '../../components/LoginForm';
import Button from '../../components/Button';

import styles from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <>
      <div className="container">Header</div>

      <main className={styles.Hero}>
        <div className="container">
          <h1 className={styles.Title}>Вход</h1>
          <LoginForm />
        </div>
      </main>
    </>
  );
}
