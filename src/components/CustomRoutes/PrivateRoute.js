import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';

export default function PrivateRoute({ children, redirectTo, ...routeProps }) {
  const isLogin = useSelector(authSelectors.getIsLogin);

  return (
    <Route {...routeProps}>
      {isLogin ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
