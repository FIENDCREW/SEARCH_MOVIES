import { IMovies } from 'interfaces/IMovies';

export interface IMoviesState {
  moviesData: IMovies[];
  loading: boolean;
  error: string | null;
}

interface IBaseAction {
  type: string;
}

export interface ISetMoviesDataAction extends IBaseAction {
  payload: IMovies[];
}
export interface ICreateMovieAction extends IBaseAction {
  payload: IMovies;
}

export type MoviesReducerAction = ISetMoviesDataAction | ICreateMovieAction;
