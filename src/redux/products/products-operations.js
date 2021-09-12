/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import producstActions from './products-actions';

const addProduct = newProduct => async dispatch => {
  dispatch(producstActions.getProductsRequest());

  try {
    const {
      data: {
        data: {
          day: { productList },
        },
      },
    } = await axios.post(`/api/days/addProduct`, newProduct);
    dispatch(producstActions.getProductsSuccess(productList));
  } catch (error) {
    dispatch(producstActions.getProductsError(error.message));
  }
};

const removeProduct = removeProductInfo => async dispatch => {
  dispatch(producstActions.removeProductRequest());

  try {
    const {
      data: {
        data: {
          day: { productList },
        },
      },
    } = await axios.post(`api/days/removeProduct`, removeProductInfo);
    dispatch(producstActions.removeProductSuccess(productList));
  } catch (error) {
    dispatch(producstActions.removeProductError(error.message));
  }
};

const getDayProducts = date => async dispatch => {
  dispatch(producstActions.getDayProductsRequest());

  try {
    const {
      data: { data },
    } = await axios.post(`/api/days/get`, date);
    const needData = data.day ? data.day.productList : [];
    dispatch(producstActions.getDayProductsSuccess(needData));
  } catch (error) {
    dispatch(producstActions.getDayProductsError(error.message));
  }
};

const getAllProducts = async product => {
  const response = await axios.get(`/api/product/?productName=${product}`);
  return response.data.data.result;
};

export default {
  addProduct,
  getDayProducts,
  removeProduct,
  getAllProducts,
};
