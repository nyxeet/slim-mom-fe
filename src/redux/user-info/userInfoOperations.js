import axios from 'axios';
import userInfoActions from './userInfoActions';

const onFetchCurrentUser = () => dispatch => {
  dispatch(userInfoActions.fetchUserInfoRequest());

  axios
    .get(`/api/user/getCurrentUser`)
    .then(receivedData => {
      dispatch(
        userInfoActions.fetchUserInfoSuccess(receivedData.data.data)
      );
    })
    .catch(error => {
      dispatch(userInfoActions.fetchUserInfoError(error));
    });
};
// eslint-disable-next-line
export default {
  onFetchCurrentUser,
};
