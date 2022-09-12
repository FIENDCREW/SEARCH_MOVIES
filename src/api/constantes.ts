import { APIKey } from './axios';

export const moviesUrl = 'http://www.omdbapi.com/?s=Guardians&apikey=8edd12cb';

export const infoUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=8edd12cb';

export const searchUrl = (search: string, page: number) =>
  `https://www.omdbapi.com/?apiKey=${APIKey}&s=${search}&type=movie&page=${page}`;
