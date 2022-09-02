import { stat } from 'fs';
import { IStore } from 'store/i';

export const getMoviesData = (state: IStore) => state.movies.moviesData;
