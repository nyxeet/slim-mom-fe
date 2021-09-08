import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { logOut } from '../../redux/auth/auth.operations';
//import { getUserName, isAuthenticated } from '../../redux/auth/auth.selectors';

import styles from './Logout.module.css';

const Logout = () => {
  const name = 'Nic';
  //useSelector(getUserName);
  const dispatch = useDispatch();

  // const onLogOut = e => {
  //   dispatch(logOut());
  // };

  return (
    <>
      <div className={styles.logout}>
        <span className={styles.userLogin}> {name} </span>
        <button
          type="button"
          className={styles.exitButton}
          // onClick={onLogOut}
        >
          Выйти
        </button>
      </div>
    </>
  );
};

export default Logout;
