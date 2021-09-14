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
  loginLink,
  children,
  registrationLink,
  hide,
  withLink,
  withoutlink,
  withoutLink,
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
        hide && styles.Hide,
        withLink && styles.WithLink,
        withoutLink && styles.WithOutLink,
      )}
    >
      {link ? (
        <Link
          className={classNames(
            loginLink && styles.loginLink,
            registrationLink && styles.registrationLink,
            withLink && styles.Size,
          )}
          to={linkTo}
        >
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
  loginLink: false,
  registrationLink: false,
  hide: false,
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
