/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import authActions from './auth-actions';

// todo
axios.defaults.baseURL = '';

const token = {
  on(key) {
    axios.defaults.headers.common.Authorization = `Bearer ${key}`;
  },
  off() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registration = userData => async dispatch => {
  dispatch(authActions.authRegistrationRequest());

  try {
    const { data } = await axios.post('/api/user/signup', userData);
    token.on(data.user.token);
    const registrationData = {
      user: {
        ...data.user.name,
        ...data.user.login,
      },
      token: { ...data.user.token },
    };
    dispatch(authActions.authRegistrationSuccess(registrationData));
  } catch (error) {
    dispatch(authActions.authRegistrationError(error.message));
  }
};

const login = userData => async dispatch => {
  dispatch(authActions.authLoginRequest());

  try {
    const { data } = await axios.post('/api/user/login', userData);
    token.on(data.token);
    const loginData = {
      user: {
        ...data.name,
        ...data.login,
      },
      token: { ...data.token },
    };
    dispatch(authActions.authLoginSuccess(loginData));
  } catch (error) {
    dispatch(authActions.authLoginError(error.message));
  }
};

export default {
  login,
  registration,
};
