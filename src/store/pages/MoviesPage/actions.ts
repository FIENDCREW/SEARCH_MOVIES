import { IMovies } from 'interfaces/IMovies';
import { ICreateMovieAction, ISetMoviesDataAction } from './interfaces';

export const SET_MOVIES_DATA = 'SET_MOVIES_DATA';

export const setMoviesDataAction = (payload: IMovies[]): ISetMoviesDataAction => {
  return { type: SET_MOVIES_DATA, payload };
};

export const CREATE_MOVIE = 'CREATE_MOVIE';

export const createMovieAction = (payload: IMovies): ICreateMovieAction => {
  return { type: CREATE_MOVIE, payload };
};
