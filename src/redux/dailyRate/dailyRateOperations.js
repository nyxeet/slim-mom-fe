import axios from 'axios';
import dailyRateActions from './dailyRateActions';
import authOperations from '../auth/authOperations';

axios.defaults.baseURL = 'https://slim-mom.herokuapp.com';

const onFetchDailyRates = values => dispatch => {
  dispatch(dailyRateActions.fetchDailyRateRequest());

  axios
    .post('/daily-rate', values)
    .then(receivedData => {
      dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data));
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
