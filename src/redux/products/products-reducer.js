import { createReducer, combineReducers } from '@reduxjs/toolkit';
import producstActions from './products-actions';

const productsReducer = createReducer([], {
  [producstActions.productsFetchSuccess]: (_, { payload }) => payload,
});

export default productsReducer;
