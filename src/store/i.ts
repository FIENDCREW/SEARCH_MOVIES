import { IMoviesState } from './pages/MoviesPage/interfaces';
import { ISearchState } from './pages/SearchPage/interface';

export interface IStore {
  movies: IMoviesState;
  search: ISearchState;
}
