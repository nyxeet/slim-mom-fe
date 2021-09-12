import { createReducer } from '@reduxjs/toolkit';
import dailyRateActions from './dailyRateActions';

const initialState = {
  calories: 0,
  notAllowedProducts: [],
};

const setDiet = (_, { payload }) => payload;
const userDataDiet = createReducer(initialState, {
  [dailyRateActions.fetchDailyRateSuccess]: setDiet,
});

export default userDataDiet;
