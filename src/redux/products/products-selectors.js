const getContacts = state => {
  return state.products.map(item => item);
};

const getDate = state => {
  return state.products.date;
};

export default {
  getContacts,
  getDate,
};
