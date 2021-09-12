/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import authActions from './auth-actions';

const token = localStorage.getItem('token') || null;
if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// todo
axios.defaults.baseURL = 'http://localhost:3001';

const isToken = {
  on(key) {
    axios.defaults.headers.common.Authorization = `Bearer ${key}`;
    localStorage.setItem('token', key);
  },
  off() {
    axios.defaults.headers.common.Authorization = '';
    localStorage.removeItem('token');
  },
};

const registration = userData => async dispatch => {
  dispatch(authActions.authRegistrationRequest());

  try {
    const { data } = await axios.post('/api/user/signup', userData);
    isToken.on(data.data.user.token);
    const { name, login, token } = data.data.user;
    const registrationData = {
      user: {
        name,
        login,
      },
      token,
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
    console.log(data);
    const { token } = data.data;
    isToken.on(token);
    dispatch(authActions.authLoginSuccess(token));
  } catch (error) {
    dispatch(authActions.authLoginError(error.message));
  }
};

const logout = () => async dispatch => {
  dispatch(authActions.authLogoutRequest());

  try {
    await axios.post('/api/user/logout');
    isToken.off();
    dispatch(authActions.authLogoutSuccess());
  } catch (error) {
    dispatch(authActions.authLogoutError(error.message));
  }
};

export default {
  login,
  registration,
  logout,
};
