import React from 'react';
import MainPage from './pages/MainPage';
import RegistrationPage from './pages/RegistrationPage';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CalculatorPage from './pages/CalculatorPage';
import Header from './components/Header';
import DiaryPage from './pages/DiaryPage/DiaryPage';

import {
  loginLink,
  registrationLink,
  homeLink,
  diaryLink,
  calculatorLink,
} from './routes';
import { PublicRoute, PrivateRoute } from './components/CustomRoutes';

function App() {
  return (
    <>
      <Header />
      {/* // todo: Добавить Suspense,лоадер и ленивую загрузку по желанию или удалить закоментрованную часть*/}
      {/* <Suspense fallback={<h1>Loading..</h1>}> */}
      <Switch>
        <PublicRoute
          exact
          path={homeLink}
          restricted
          redirectTo={calculatorLink}
        >
          <MainPage />
        </PublicRoute>

        <PublicRoute path={registrationLink} restricted redirectTo={diaryLink}>
          <RegistrationPage />
        </PublicRoute>

        <PublicRoute path={loginLink} restricted redirectTo={diaryLink}>
          <LoginPage />
        </PublicRoute>

        <PrivateRoute path={diaryLink} redirectTo={loginLink}>
          <DiaryPage />
        </PrivateRoute>

        <PrivateRoute path={calculatorLink} redirectTo={loginLink}>
          <CalculatorPage />
        </PrivateRoute>
      </Switch>
      {/* </Suspense> */}
    </>
  );
}

export default App;
