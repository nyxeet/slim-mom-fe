import { createReducer, combineReducers } from '@reduxjs/toolkit';
import producstActions from './products-actions';

const productListReducer = createReducer([], {
  [producstActions.getProductsSuccess]: (_, { payload }) => payload,
  [producstActions.getDayProductsSuccess]: (_, { payload }) => payload,
  [producstActions.removeProductSuccess]: (_, { payload }) => payload,
});

const dateReducer = createReducer('', {
  [producstActions.dateValue]: (_, { payload }) => payload,
});

const productsReducer = combineReducers({
  productList: productListReducer,
  date: dateReducer,
});

export default productsReducer;
