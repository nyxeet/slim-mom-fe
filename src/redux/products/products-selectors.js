const getContacts = state => {
  return state.products.map(item => item);
};

export default {
  getContacts,
};
