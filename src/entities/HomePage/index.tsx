import React, { useEffect } from 'react';
import MovieListing from 'entities/MoviePage/components/MovieListing';
import { $api } from '../../api/AxiosHardAttApi';
import { APIKey } from '../../api/MoviesApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from 'store/pages/MoviesPage/movieSlice';

const HomePage = () => {
  const movieText = 'Harry';
  const dispatch = useDispatch();

  const getMovies = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(addMovies(data));
  };

  useEffect(() => {
    getMovies(APIKey);
  }, []);
  
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const response = await $api
  //       .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)

  //       .catch((err) => {
  //         console.log('Err', err);
  //       });
  //     dispatch(addMovies(response.data));
  //   };
  //   fetchMovies();
  // }, []);
  return (
    <div>
      <div>HomePage</div>
      <MovieListing />
    </div>
  );
};

export default HomePage;
