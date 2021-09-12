import axios from 'axios';
import dailyRateActions from './dailyRateActions';

const onFetchDailyRates = values => dispatch => {
  dispatch(dailyRateActions.fetchDailyRateRequest());

  axios
    .post(`/api/user/getCalories`, values)
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
    .post(`/api/user/setUserCalories`, values)
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
