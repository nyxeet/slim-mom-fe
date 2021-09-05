import { createReducer } from '@reduxjs/toolkit';
import dailyRateActions from './dailyRateActions';

const initialState = {
  id: '',
  dailyRate: '2800',
  summaries: [
    {
      _id: '',
      date: '',
      kcalLeft: '',
      kcalConsumed: '',
      dailyRate: '',
      percentsOfDailyRate: '',
      userId: '',
      __v: '',
    },
  ],
  notAllowedProducts: ['apples', 'bread'],
};

const setDiet = (_, { payload }) => payload;
const userDataDiet = createReducer(initialState, {
  [dailyRateActions.fetchDailyRateSuccess]: setDiet,
});

export default userDataDiet;
