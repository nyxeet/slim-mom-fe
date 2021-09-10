/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const getProductsRequest = createAction('products/getProductsRequest');
const getProductsSuccess = createAction('products/getProductsSuccess');
const getProductsError = createAction('products/getProductsError');

const dateValue = createAction('products/dateValue');

export default {
  getProductsRequest,
  getProductsSuccess,
  getProductsError,
  dateValue,
};
