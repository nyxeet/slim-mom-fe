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
    const { data } = await axios.post(
      'http://localhost:3000/api/days/addProduct',
      newProduct,
    );
    console.log(data);
    // dispatch(producstActions.getProductsSuccess(data));
  } catch (error) {
    dispatch(producstActions.getProductsError(error.message));
  }
};

export default {
  addProduct,
};
