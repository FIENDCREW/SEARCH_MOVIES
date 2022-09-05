import { IMovies } from 'interfaces/IMovies';
import { act } from 'react-dom/test-utils';
import { IMoviesState } from '../MoviesPage/interfaces';
import { CREATE_SEARCH, SET_SEARCH_DATA } from './actions';
import { ISearchState, SerachReduserAction } from './interface';

const initialSearchState: ISearchState = {
  searchData: [],
  loading: false,
  error: null,
};

export const SerachReducer = (
  state: ISearchState = initialSearchState,
  action: SerachReduserAction
): ISearchState => {
  switch (action.type) {
    case CREATE_SEARCH:
      return { ...state, searchData: [...state.searchData, action.payload as IMovies] };
    case SET_SEARCH_DATA:
      return { ...state, searchData: action.payload as IMovies[] };
    default:
      return state;
  }
};
