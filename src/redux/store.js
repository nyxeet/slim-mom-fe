import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './auth/auth-reducer';
import userDataDiet from './dailyRate/dailyRateReducer';
import productsReducer from './products/products-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  dailyRate: userDataDiet,
  products: productsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
