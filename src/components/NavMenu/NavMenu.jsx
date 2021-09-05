import React from 'react';
import styles from './NavMenu.module.css'
import { NavLink } from 'react-router-dom';
import { loginLink } from '../../routes'

const NavMenu = () => {
  return (
    <div className={styles.menuContainer}>
      <NavLink
        to={loginLink}
        className={styles.menuLink}
        activeClassName={styles.menuLinkActive}
      >Дневник</NavLink>
      <NavLink
        to={loginLink}
        activeClassName={styles.menuLinkActive}
        className={styles.menuLink}
      >Калькулятор</NavLink>
    </div>
  )
}

export default NavMenu