import { createReducer } from '@reduxjs/toolkit';
import userInfoActions from './userInfoActions';

const initialState = {
  userInfo: [],
};

const userInfo = createReducer(initialState, {
  [userInfoActions.fetchUserInfoSuccess]: (_, { payload }) => payload,
});

export default userInfo;
