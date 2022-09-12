import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { fullMovie, movieFullSelector } from 'store/pages/movieFullSlice';
import BackUp from '../../shared/BackUp/BackUp';
import style from './MovieDetal.module.scss';

const MovieDetail = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useAppDispatch();
  const fullMoviesData = useAppSelector(movieFullSelector);
  console.log(fullMoviesData);
  useEffect(() => {
    if (id) {
      dispatch(fullMovie(id));
    }
  }, [id]);
  return (
    <>
      <BackUp />
      <div className={style.movie_section}>
        <div className={style.section_left}>
          <div className={style.movie_title}>{fullMoviesData?.Title}</div>
          <div className={style.movie_rating}>
            <span>IMDB Рейтинг: {fullMoviesData?.imdbRating}</span>
            <span>IMDB Голоса: {fullMoviesData?.imdbVotes}</span>
            <span>Длительность: {fullMoviesData?.Runtime}</span>
            <span>Год: {fullMoviesData?.Year}</span>
          </div>
          <div className={style.movie_plot}>{fullMoviesData?.Plot}</div>
          <div className={style.movie_info}>
            <div>
              <span>Режиссер: </span>
              <span>{fullMoviesData?.Director}</span>
            </div>
            <div>
              <span>Звезды: </span>
              <span>{fullMoviesData?.Actors}</span>
            </div>
            <div>
              <span>Жанр: </span>
              <span>{fullMoviesData?.Genre}</span>
            </div>
            <div>
              <span>Языки: </span>
              <span>{fullMoviesData?.Language}</span>
            </div>
            <div>
              <span>Награды: </span>
              <span>{fullMoviesData?.Awards}</span>
            </div>
          </div>
        </div>
        <div className={style.section_rigth}>
          <img src={fullMoviesData?.Poster} alt={fullMoviesData?.Title} />
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
