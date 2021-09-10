/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const getProductsRequest = createAction('products/getProductsRequest');
const getProductsSuccess = createAction('products/getProductsSuccess');
const getProductsError = createAction('products/getProductsError');

const removeProductRequest = createAction('products/removeProductRequest');
const removeProductSuccess = createAction('products/removeProductSuccess');
const removeProductError = createAction('products/removeProductError');

const getDayProductsRequest = createAction('products/getDayProductsRequest');
const getDayProductsSuccess = createAction('products/getDayProductsSuccess');
const getDayProductsError = createAction('products/getDayProductsError');

const dateValue = createAction('products/dateValue');

export default {
  getProductsRequest,
  getProductsSuccess,
  getProductsError,

  removeProductRequest,
  removeProductSuccess,
  removeProductError,

  getDayProductsRequest,
  getDayProductsSuccess,
  getDayProductsError,

  dateValue,
};
