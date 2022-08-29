import { configureStore } from '@reduxjs/toolkit';

import moviesReducer from './pages/MoviesPage/movieSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
