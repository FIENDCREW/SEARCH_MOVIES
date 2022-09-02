import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMoviesData } from 'store/pages/MoviesPage/selectors';
import { setMoviesDataAction } from 'store/pages/MoviesPage/actions';
import { moviesUrl } from 'api/constantes';
import MovieListing from './components/MovieListing';

const MoviePage = () => {
  const dispatch = useDispatch();
  const moviesData = useSelector(getMoviesData);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const getData = async (baseUrl: string) => {
    const responce = await fetch(baseUrl);
    const data = await responce.json();
    dispatch(setMoviesDataAction(data));
  };

  useEffect(() => {
    if (pathname === '/') {
      navigate('/movie_home_page');
    }
    if (!search) {
      navigate('?page=1');
    }
  }, [pathname, navigate, search]);

  useEffect(() => {
    getData(moviesUrl);
  });
  return !moviesData ? <div>Loading...</div> : <MovieListing movieDataAttr={moviesData} />;
};

export default MoviePage;
