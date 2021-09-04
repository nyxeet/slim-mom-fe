import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({
  type,
  active,
  form,
  mr,
  link,
  linkTo,
  children,
}) {
  return (
    <button
      type={type}
      form={form}
      className={classNames(
        styles.Btn,
        active && styles.Active,
        !active && styles.NotActive,
        mr && styles.BtnPosition,
      )}
    >
      {link ? (
        <Link className={styles.Link} to={linkTo}>
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  active: 'true',
  form: null,
  children: 'Button',
  register: false,
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  form: PropTypes.string,
  children: PropTypes.string.isRequired,
};

// Примечание:
// Необходимо пробросить 3 пропса:
// 1-й type="button"
// 2-й active={true} или active={false}
// children - текст на кнопке
// link - значит кнопка перебрасывает куда-то
// linkTo - адрес куда
