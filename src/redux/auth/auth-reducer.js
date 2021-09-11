import { createReducer, combineReducers } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialState = {
  name: null,
  login: null,
};

const initialTokenState = localStorage.getItem('token') || null

const userReducer = createReducer(initialState, {
  [authActions.authRegistrationSuccess]: (_, { payload }) => payload.user,
  [authActions.authLoginSuccess]: (_, { payload }) => payload.user,
  [authActions.authLogoutSuccess]: () => initialState,
  //   [authActions.authRefreshSuccess]: (_, { payload }) => payload,
});


const tokenReducer = createReducer(initialTokenState, {
  [authActions.authRegistrationSuccess]: (_, { payload }) => payload.token,
  [authActions.authLoginSuccess]: (_, { payload }) => payload,
  [authActions.authLogoutSuccess]: (_ , __) => null,
});

const errorReducer = createReducer(null, {
  [authActions.authRegistrationError]: (_, { payload }) => payload,
  [authActions.authLoginError]: (_, { payload }) => payload,
  [authActions.authLogoutError]: (_, { payload }) => payload,
  [authActions.authRefreshError]: (_, { payload }) => payload,
});

const isLoginReducer = createReducer(false, {
  [authActions.authRegistrationSuccess]: () => true,
  [authActions.authLoginSuccess]: () => true,
  [authActions.authLogoutSuccess]: () => false,
  [authActions.authRefreshSuccess]: () => true,
});

const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer,
  isLogin: isLoginReducer,
});

export default authReducer;
