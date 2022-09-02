import { IMovies } from 'interfaces/IMovies';
import { CREATE_MOVIE, SET_MOVIES_DATA } from './actions';
import { IMoviesState, MoviesReducerAction } from './interfaces';

const initialState: IMoviesState = {
  moviesData: [],
  loading: false,
  error: null,
};

export const MoviesReducer = (
  state: IMoviesState = initialState,
  action: MoviesReducerAction
): IMoviesState => {
  switch (action.type) {
    case CREATE_MOVIE:
      return { ...state, moviesData: [...state.moviesData, action.payload as IMovies] };
    case SET_MOVIES_DATA:
      return { ...state, moviesData: action.payload as IMovies[] }; // кастин типов
    default:
      return state;
  }
};
