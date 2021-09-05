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

const onFetchDailyRatesAuthorised =
  (values, userId) => (dispatch, getState) => {
    const {
      auth: { sid: sidValue },
    } = getState();

    dispatch(dailyRateActions.fetchDailyRateRequestAuth());

    axios
      .post(`/daily-rate/${userId}`, values)
      .then(receivedData => {
        dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data));
      })
      .catch(error => {
        dispatch(
          authOperations.refreshUser(
            { sid: sidValue },
            'DailyRates',
            values,
            userId,
          ),
        );
        dispatch(dailyRateActions.fetchDailyRateErrorAuth(error));
      });
  };

// eslint-disable-next-line
export default {
  onFetchDailyRates,
  onFetchDailyRatesAuthorised,
};
