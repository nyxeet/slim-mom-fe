import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../redux/auth';
import userInfoSelector from '../../redux/user-info/userInfoSelector';
//import { logOut } from '../../redux/auth/auth.operations';
//import { getUserName, isAuthenticated } from '../../redux/auth/auth.selectors';

import styles from './Logout.module.css';

const Logout = () => {
  const userName = useSelector(userInfoSelector.getUserLogin);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(authOperations.logout());

  return (
    <>
      <div className={styles.logout}>
        <div className={styles.container}>
          <span className={styles.userLogin}> {userName || 'Nickname'} </span>
          <button
            type="button"
            className={styles.exitButton}
            onClick={onLogOut}
          >
            Выйти
          </button>
        </div>
      </div>
    </>
  );
};

export default Logout;
