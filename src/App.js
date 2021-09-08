import React from 'react';
import MainPage from './pages/MainPage';
import RegistrationPage from './pages/RegistrationPage';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CalculatorPage from './pages/CalculatorPage';
import DiaryDateCalendar from './components/DiaryDateCalendar/DiaryDateCalendar';
import Header from './components/Header';
import DiaryPage from './pages/DiaryPage';
import AddProductMobileForm from './components/AddProductMobileForm';

function App() {
  return (
    <>
      <Header />
      <CalculatorPage />
    </>
  );

  // return <AddProductMobileForm />;
  // return <RegistrationPage />;
  // return <LoginPage />;
  //return <CalculatorPage />;
  // return <DiaryDateCalendar />;
  // return <Header/>;
  //return <MainPage />;
}

export default App;
