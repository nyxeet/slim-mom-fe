import { createReducer } from '@reduxjs/toolkit';
import dailyRateActions from './dailyRateActions';

const initialState = {
  calories: 0,
  notAllowedProducts: [],
};

const setUserDiet = (_, { payload }) => payload;
const userDataDietAuth = createReducer(initialState, {
  [dailyRateActions.fetchDailyRateSuccessAuth]: setUserDiet,
});

export default userDataDietAuth;
