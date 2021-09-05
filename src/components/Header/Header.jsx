import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styles from './Header.module.css'
import fitnessIcon from '../../images/icons/Header/fitness.svg'
import menuIcon from '../../images/icons/Header/menu.svg'
import closeIcon from '../../images/icons/Header/closeIcon.svg'
import NavMenu from '../NavMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.auth.isLogin)
  const user = useSelector(state => state.auth.user)

  const handleOpenMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (<>
    <header className={styles.headerContainer}>
      <div className={styles.headerContentContainer}>
        <img className={styles.headerImage} src={fitnessIcon} alt="" />
        <div className={styles.headerText + ` ${isLoggedIn ? styles.withTitle : ""}`}>
          Slim<span>Mom</span>
        </div>
        <div className={styles.toolsContainer}>
          {isLoggedIn && (<>
            <img
              onClick={handleOpenMenu}
              width={`${menuOpen ? '12' : '18'}`}
              height='12'
              className={styles.menuIcon}
              src={menuOpen ? closeIcon : menuIcon}
              alt="menu"
              title='Открыть меню'
            />
          </>)}
          {!isLoggedIn && (<>
            <div className={styles.tool}>Вход</div>
            <div className={styles.tool}>Регистрация</div>
          </>)}
        </div>
      </div>
    </header>
    {menuOpen && (
      <NavMenu />
    )}
  </>);
}

export default Header;


