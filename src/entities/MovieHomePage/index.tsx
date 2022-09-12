import React from 'react';
import Pagination from 'shared/Pagination/Pagination';
import { useAppSelector } from 'store/hooks';
import { moviesSelector, totalResultsSelector } from 'store/pages/movieSlice';
import MovieListing from './components/MovieListing';

const MovieHomePage = () => {
  const moviesData = useAppSelector(moviesSelector);
  const totalResults = useAppSelector(totalResultsSelector);

  return !moviesData ? (
    <div>Введи название фильма в строку поиска</div>
  ) : (
    <>
      <MovieListing movieDataAttr={moviesData} />
      <hr />
      <Pagination limit={10} totalResults={totalResults} />
    </>
  );
};

export default MovieHomePage;
