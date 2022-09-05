import { stat } from 'fs';
import { IStore } from 'store/i';

export const getSearchData = (state: IStore) => state.search.searchData;
