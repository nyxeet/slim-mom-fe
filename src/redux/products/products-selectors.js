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

export default {
  getContacts,
  getDate,
  getProductList,
};
