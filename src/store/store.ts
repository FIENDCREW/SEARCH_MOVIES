import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { MoviesReducer } from './pages/MoviesPage/reducer';

const reducer = {
  movies: MoviesReducer,
};

export const rootReducer = combineReducers(reducer);

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
