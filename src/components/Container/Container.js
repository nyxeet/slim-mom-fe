import React from 'react';
import styles from './Container.module.css';
import classNames from 'classnames';

const Container = ({ children, classes }) => {
  return (
    <div className={classNames(styles.container, classes)}>{children}</div>
  );
};

export default Container;
