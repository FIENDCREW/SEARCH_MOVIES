import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from 'store/pages/MoviesPage/movieSlice';
import MovieCrad from './MovieCrad';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = '';
  renderMovies =
    movies.Responce === 'True' ? (
      movies.Search.map((movie: any, index: React.Key | null | undefined) => {
        <MovieCrad key={index} movie={movie} />;
      })
    ) : (
      <div>
        <h3>{movies.Error}</h3>
      </div>
    );
  return <div>MovieListing</div>;
};

export default MovieListing;
