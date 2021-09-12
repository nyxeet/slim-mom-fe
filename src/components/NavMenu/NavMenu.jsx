import React from 'react';
import styles from './NavMenu.module.css'
import { NavLink } from 'react-router-dom';
import { diaryLink, calculatorLink} from '../../routes'

const NavMenu = ({
  setOpen,
}) => {
  return (
    <div className={styles.menuContainer}>
      <NavLink
        to={diaryLink}
        className={styles.menuLink}
        activeClassName={styles.menuLinkActive}
        onClick={() => setOpen(false)}
      >Дневник</NavLink>
      <NavLink
        to={calculatorLink}
        activeClassName={styles.menuLinkActive}
        className={styles.menuLink}
        onClick={() => setOpen(false)}
      >Калькулятор</NavLink>
    </div>
  )
}

export default NavMenu