/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import producstActions from './products-actions';

// axios.defaults.baseURL = 'http://localhost:3000/api/days';

const token = {
  on() {
    axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzkwY2YzNjU5OWRjMWQ4MDc2MzA0MyIsImlhdCI6MTYzMTEyODgxOX0.GAV0OSo256OdCuMu1FKir7ckcwigTUOND2SIf-NV7sk`;
  },
  off() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const addProduct = newProduct => async dispatch => {
  //  ! пометь потом
  token.on();
  dispatch(producstActions.getProductsRequest());

  try {
    const {
      data: {
        data: {
          day: { productList },
        },
      },
    } = await axios.post(
      'http://localhost:3000/api/days/addProduct',
      newProduct,
    );
    dispatch(producstActions.getProductsSuccess(productList));
  } catch (error) {
    dispatch(producstActions.getProductsError(error.message));
  }
};

const removeProduct = removeProductInfo => async dispatch => {
  //  ! пометь потом
  token.on();
  dispatch(producstActions.removeProductRequest());

  try {
    const {
      data: {
        data: {
          day: { productList },
        },
      },
    } = await axios.post(
      'http://localhost:3000/api/days/removeProduct',
      removeProductInfo,
    );
    dispatch(producstActions.removeProductSuccess(productList));
  } catch (error) {
    dispatch(producstActions.removeProductError(error.message));
  }
};

const getDayProducts = date => async dispatch => {
  //  ! пометь потом
  token.on();
  dispatch(producstActions.getDayProductsRequest());

  try {
    const {
      data: { data },
    } = await axios.post('http://localhost:3000/api/days/get', date);
    const needData = data.day ? data.day.productList : [];
    dispatch(producstActions.getDayProductsSuccess(needData));
  } catch (error) {
    dispatch(producstActions.getDayProductsError(error.message));
  }
};

const getAllProducts = async product => {
  const response = await axios.get(
    `http://localhost:3000/api/product/?productName=${product}`,
  );
  return response.data.data.result;
};

export default {
  addProduct,
  getDayProducts,
  removeProduct,
  getAllProducts,
};
