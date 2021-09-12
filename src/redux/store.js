import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './auth/auth-reducer';
import userDataDiet from './dailyRate/dailyRateReducer';
import loaderReducer from './loader/loader-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  dailyRate: userDataDiet,
  loader: loaderReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  // middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
