import React from 'react';
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useState } from "react";
import useMedia from "use-media";

import Modal from './BurgerModalWindow/BurgerModal'
import Navigation from './Navigation';
import UserInfo from '../UserInfo'

import styles from './Header.module.css';

const Header = () => {
    const [state, setState] = useState(false);

    const isWideScreen = useMedia({ minWidth: "320px", maxWidth: "767px" });
    
      const setModalState = () =>
    setState((prev) => ({ isModalOpen: !prev.isModalOpen }));

  const { isModalOpen } = state;
    

    return <div className={styles.container}>

        <Navigation/>
        
        {isModalOpen && (
        <Modal hideModal={setModalState}>
          <ul className={styles.listBurger}>
            <li className={styles.listBurgerItem}>
              <NavLink
                className={styles.linkBurger}
                activeClassName={styles.linkActiveWhite}
                onClick={setModalState}
                to="/diary"
              >
                ДНЕВНИК
              </NavLink>
            </li>
            <li className={styles.listBurgerItem}>
              <NavLink
                className={styles.linkBurger}
                activeClassName={styles.linkActiveWhite}
                onClick={setModalState}
                to="/calculator"
              >
                КАЛЬКУЛЯТОР
              </NavLink>
            </li>
          </ul>
        </Modal>
        )}
        
      {isWideScreen && <UserInfo />}


    </div>
}

export default withRouter(Header);
