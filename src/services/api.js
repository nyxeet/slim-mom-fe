/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const getAllProducts = async product => {
  const response = await axios.get(
    `http://localhost:3000/api/product/?productName=${product}`,
  );
  return response.data.data.result;
};

export default {
  getAllProducts,
};
