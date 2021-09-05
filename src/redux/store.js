import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './auth/auth-reducer';
import userDataDiet from './dailyRate/dailyRateReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  dailyRate: userDataDiet,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
