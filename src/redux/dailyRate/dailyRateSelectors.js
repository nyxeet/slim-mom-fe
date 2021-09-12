const getCalories = state => state.dailyRate.calories;
const getProducts = state => state.dailyRate.notAllowedProducts;
const getUserCalories = state => state.userDiet.calories;
const getUserProducts = state => state.userDiet.notAllowedProducts;

// eslint-disable-next-line
export default { getCalories, getProducts, getUserCalories, getUserProducts };

// eslint-disable-next-line
