import React, { Suspense } from 'react';
import MainPage from './pages/MainPage';
import RegistrationPage from './pages/RegistrationPage';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CalculatorPage from './pages/CalculatorPage';
import Header from './components/Header';
import DiaryPage from './pages/DiaryPage/DiaryPage';

import AddProductPage from './pages/AddProductPage';

import {
  loginLink,
  registrationLink,
  homeLink,
  diaryLink,
  calculatorLink,
  addProductMobileForm,
} from './routes';
import { PublicRoute, PrivateRoute } from './components/CustomRoutes';
import Loader from './components/Loader';

function App() {
  return (
    <>
      <Header />
    <Suspense fallback={<Loader />}>
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
        <PrivateRoute path={addProductMobileForm} redirectTo={loginLink}>
          <AddProductPage />
        </PrivateRoute>
      </Switch>
    </Suspense>

    </>
  );
}

export default App;
