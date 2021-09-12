import { createAction } from '@reduxjs/toolkit';

const fetchUserInfoRequest = createAction('userInfo/fetchRequest');
const fetchUserInfoSuccess = createAction('userInfo/fetchSuccess');
const fetchUserInfoError = createAction('userInfo/fetchError');

// eslint-disable-next-line
export default {
  fetchUserInfoRequest,
  fetchUserInfoSuccess,
  fetchUserInfoError,
};
