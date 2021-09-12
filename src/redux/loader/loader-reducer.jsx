import { createReducer } from "@reduxjs/toolkit";
import dailyRateActions from "../dailyRate/dailyRateActions";
import authActions from "../auth/auth-actions";

const loader = createReducer(false, {
   [authActions.authRegistrationRequest]: () => true,
   [authActions.authRegistrationSuccess]: () => false,
   [authActions.authRegistrationError]: () => false,
   [authActions.authLoginRequest]: () => true,
   [authActions.authLoginSuccess]: () => false,
   [authActions.authLoginError]: () => false,
   [dailyRateActions.fetchDailyRateRequest]: () => true,
   [dailyRateActions.fetchDailyRateSuccess]: () => false,
   [dailyRateActions.fetchDailyRateError]: () => false
});

export default loader;
