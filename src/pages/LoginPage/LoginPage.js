import React from 'react';
import classNames from 'classnames';

import LoginForm from '../../components/LoginForm';

import styles from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <section className={styles.LoginPage}>
      <div className={classNames('container', styles.LoginContainer)}>
        <div>Header</div>

        <main className={styles.Hero}>
          <h1 className={styles.Title}>Вход</h1>
          <LoginForm />
        </main>
      </div>
    </section>
  );
}
