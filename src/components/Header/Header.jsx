import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styles from './Header.module.css'
import fitnessIcon from '../../images/icons/Header/fitness.svg'
import menuIcon from '../../images/icons/Header/menu.svg'
import closeIcon from '../../images/icons/Header/closeIcon.svg'
import NavMenu from '../NavMenu';
import useMedia from "use-media";
import Logout from '../Logout';
import { useHistory } from "react-router-dom";
import {diaryLink, calculatorLink, loginLink, registrationLink, homeLink } from '../../routes';
import { NavLink, Link } from 'react-router-dom';


const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  // const isLoggedIn = true;
  const isDesktop = useMedia({ minWidth: "1280px" });
  let isLoggedIn = useSelector(state => state.auth.token)
  const user = useSelector(state => state.auth.user)
  
  const handleOpenMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (<>
    <header className={styles.headerContainer}>
      <div className={styles.headerContentContainer}>
        <Link to={homeLink}><img className={styles.headerImage} src={fitnessIcon} alt="" /></Link>
        <Link to={homeLink}><div className={styles.headerText + ` ${isLoggedIn ? styles.withTitle : ""}`}>
          Slim<span>Mom</span>
        </div></Link>
        <div className={styles.toolsContainer}>
          {isLoggedIn && !isDesktop && (<>
            <Logout/>
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
          {isLoggedIn && isDesktop && (
            <>
            <NavLink to = {diaryLink} className={styles.tool} activeClassName={styles.active}>Дневник</NavLink>
            <NavLink to = {calculatorLink} className={styles.tool} activeClassName={styles.active}>Калькулятор</NavLink>
              <Logout/>
          </>)
          }
          {!isLoggedIn && (<>
            <NavLink className={styles.tool} to = {loginLink} activeClassName={styles.active}>
               Вход
            </NavLink>   
            <NavLink className={styles.tool} to = {registrationLink} activeClassName={styles.active}>
              Регистрация
            </NavLink>
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



