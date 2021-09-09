import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/product/';

async function getAllProducts(product) {
  return await axios.get(`/?productName=${product}`);
}

export default {
  getAllProducts,
};
