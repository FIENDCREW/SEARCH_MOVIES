import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIKey } from 'api/axios';
import axios from 'axios';
import { IMovies } from 'interfaces/IMovies';
import { RootState } from 'store/store';

export const fullMovie = createAsyncThunk('full/fullMovie', async (id: string, thunkAPI) => {
  const response = await axios.get(`http://www.omdbapi.com/?apiKey=${APIKey}&i=${id}&Plot=full`);
  return response.data;
});

interface IFullMovieState {
  fullMoviesData: IMovies | null;
  loading: boolean;
  error: null | string | undefined;
}

export const movieFullSlise = createSlice({
  name: 'full',
  initialState: {
    fullMoviesData: null,
    loading: false,
    error: null,
  } as IFullMovieState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fullMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fullMovie.fulfilled, (state, action) => {
        state.fullMoviesData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fullMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = 'error';
      });
  },
});
export const movieFullSelector = (state: RootState) => state.full.fullMoviesData;
export default movieFullSlise.reducer;
