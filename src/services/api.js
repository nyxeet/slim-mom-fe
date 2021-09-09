/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/product';

const getAllProducts = async product => {
  const response = await axios.get(`/?productName=${product}`);
  return response.data.data.result;
};

export default {
  getAllProducts,
};
