import { IMovies } from 'interfaces/IMovies';
import { ICreateSearchAction, ISetSearchDataAction } from './interface';

export const SET_SEARCH_DATA = 'SET_SEARCH_DATA';

export const setSearchDataAction = (payload: IMovies[]): ISetSearchDataAction => {
  return { type: SET_SEARCH_DATA, payload };
};

export const CREATE_SEARCH = 'CREATE_SEARCH';

export const createSearchAction = (payload: IMovies): ICreateSearchAction => {
  return { type: CREATE_SEARCH, payload };
};
