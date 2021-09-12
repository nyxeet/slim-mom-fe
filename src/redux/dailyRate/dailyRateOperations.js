import axios from 'axios';
import dailyRateActions from './dailyRateActions';
import authOperations from '../auth/auth-operations';

const BASE_URL = 'http://localhost:3001/api';

const onFetchDailyRates = values => dispatch => {
  dispatch(dailyRateActions.fetchDailyRateRequest());

  axios
    .post(`${BASE_URL}/user/getCalories`, values)
    .then(receivedData => {
      dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data.data));
    })
    .catch(error => {
      dispatch(dailyRateActions.fetchDailyRateError(error));
    });
};

const onFetchDailyRatesAuth = values => dispatch => {
  dispatch(dailyRateActions.fetchDailyRateRequestAuth());

  axios
    .post(`${BASE_URL}/user/setUserCalories`, values)
    .then(receivedData => {
      dispatch(
        dailyRateActions.fetchDailyRateSuccessAuth(receivedData.data.data),
      );
    })
    .catch(error => {
      dispatch(dailyRateActions.fetchDailyRateErrorAuth(error));
    });
};

// eslint-disable-next-line
export default {
  onFetchDailyRates,
  onFetchDailyRatesAuth,
};
