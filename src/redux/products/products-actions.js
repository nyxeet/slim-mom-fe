import { createAction } from '@reduxjs/toolkit';

const productsAddSuccess = createAction('auth/RegistrationSuccess');
const productsAddSuccessRequest = createAction('auth/RegistrationRequest');
const productsAddSuccessError = createAction('auth/RegistrationError');

const productsFetchSuccess = createAction('auth/RegistrationSuccess');
const productsFetchSuccessRequest = createAction('auth/RegistrationRequest');
const productsFetchSuccessError = createAction('auth/RegistrationError');

export default {
  productsFetchSuccess,
  productsFetchSuccessRequest,
  productsFetchSuccessError,
};
