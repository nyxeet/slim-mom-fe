import React, { Suspense, lazy } from 'react';
// import { Switch } from 'react-router-dom';
// import { loginLink } from './routes';

import LoginPage from './pages/LoginPage/LoginPage';

// const LoginPage = lazy(() =>
//   import('./pages/LoginPage' /* webpackChunkName: "LoginPage" */),
// );

function App() {
  return (
    <>
      <LoginPage />
      {/* <Switch>
        <PublicRoute path={loginLink} restricted redirectTo={contactsLink}>
          <LoginPage />
        </PublicRoute>
      </Switch> */}
    </>
  );
}

export default App;
