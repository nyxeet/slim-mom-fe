import { createSelector } from 'reselect';

/* eslint-disable import/no-anonymous-default-export */

const getContacts = state => {
  return state.products.map(item => item);
};

const getDate = state => {
  return state.products.date;
};

const getProductList = state => {
  return state.products.productList;
};

const getTotalDailyCcal = createSelector([getProductList], productList =>
  productList.reduce((accum, product) => {
    return accum + product.calories;
  }, 0),
);

export default {
  getContacts,
  getDate,
  getProductList,
  getTotalDailyCcal,
};
