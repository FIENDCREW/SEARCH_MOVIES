/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIKey } from 'api/axios';
import axios from 'axios';
import { IMovies } from 'interfaces/IMovies';
import { RootState } from 'store/store';

export const searchMovie = createAsyncThunk(
  'movies/searchMovie',
  async (query: string, thunkAPI) => {
    const response = await axios.get(query);
    return response.data;
  }
);

interface IMovieState {
  moviesData: IMovies[] | null;
  totalResults: number;
  page: number;
  loading: boolean;
  error: null | string | undefined;
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    moviesData: null,
    loading: false,
    totalResults: 0,
    page: 1,
    error: null,
  } as IMovieState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMovie.fulfilled, (state, action) => {
        state.moviesData = action.payload.Search;
        state.totalResults = +action.payload.totalResults;

        state.loading = false;
        state.error = null;
      })
      .addCase(searchMovie.rejected, (state) => {
        state.loading = false;
        state.error = 'error';
      });
  },
});
export const moviesSelector = (state: RootState) => state.movies.moviesData;
export const totalResultsSelector = (state: RootState) => state.movies.totalResults;
export const pageSelector = (state: RootState) => state.movies.page;
export const { changePage } = movieSlice.actions;
export default movieSlice.reducer;
