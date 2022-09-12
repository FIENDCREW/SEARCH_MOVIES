import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moviesReducer from './pages/movieSlice';
import fullReducer from './pages/movieFullSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    full: fullReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
