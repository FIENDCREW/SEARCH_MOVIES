import { IMovies } from 'interfaces/IMovies';

export interface ISearchState {
  searchData: IMovies[];
  loading: boolean;
  error: string | null;
}

interface ISearchAction {
  type: string;
}

export interface ISetSearchDataAction extends ISearchAction {
  payload: IMovies[];
}

export interface ICreateSearchAction extends ISearchAction {
  payload: IMovies;
}

export type SerachReduserAction = ISetSearchDataAction | ICreateSearchAction;
