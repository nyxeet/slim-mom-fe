import { createReducer, combineReducers } from '@reduxjs/toolkit';
import userInfoActions from './userInfoActions';

const initialState = {
  userInfo: [],
};

const userInfo = createReducer(initialState, {
  [userInfoActions.fetchUserInfoSuccess]: (_, { payload }) => payload.userData,
});

const userLogin = createReducer(null, {
  [userInfoActions.fetchUserInfoSuccess]: (_, {payload}) => payload.login
})

export default combineReducers({
  userInfo,
  userLogin,
});
