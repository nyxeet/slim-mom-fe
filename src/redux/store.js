import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';





const rootReducer = combineReducers({})


const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


export default store;