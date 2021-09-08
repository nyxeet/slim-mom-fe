/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import producstActions from './products-actions';

axios.defaults.baseURL = 'http://localhost:3000/api/product/';

const token = {
  on() {
    axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzkwY2YzNjU5OWRjMWQ4MDc2MzA0MyIsImlhdCI6MTYzMTEyODgxOX0.GAV0OSo256OdCuMu1FKir7ckcwigTUOND2SIf-NV7sk`;
  },
  off() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const getProduct = product => async dispatch => {
  dispatch(producstActions.productsFetchSuccessRequest());

  try {
    const response = await axios.get(`/?productName=${product}`);
    dispatch(producstActions.productsFetchSuccess(response.data.data.result));
  } catch (error) {
    dispatch(producstActions.productsFetchSuccessError(error.message));
  }
};

export default {
  getProduct,
};
