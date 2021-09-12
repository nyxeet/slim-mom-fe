import { createAction } from '@reduxjs/toolkit';

const fetchUserInfoRequest = createAction('userInfo/fetchRequest');
const fetchUserInfoSuccess = createAction('userInfo/fetchSuccess');
const fetchUserInfoError = createAction('userInfo/fetchError');
const fetchUserLoginSuccess = createAction("userInfo/fetchUserLoginSuccess")

// eslint-disable-next-line
export default {
  fetchUserInfoRequest,
  fetchUserInfoSuccess,
  fetchUserInfoError,
  fetchUserLoginSuccess,
};
