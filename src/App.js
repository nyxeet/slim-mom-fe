import React from 'react';
import MainPage from './pages/MainPage';
import RegistrationPage from './pages/RegistrationPage';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CalculatorPage from './pages/CalculatorPage';
import DiaryDateCalendar from './components/DiaryDateCalendar/DiaryDateCalendar';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <MainPage />
    </>
  );

  // return <RegistrationPage />;
  // return <LoginPage />;
  //return <CalculatorPage />;
  // return <DiaryDateCalendar />;
  // return <Header/>;
  //return <MainPage />;
}

export default App;
