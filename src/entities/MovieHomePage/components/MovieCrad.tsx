/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from '../MovieHomePage.module.scss';

interface IProps {
  id: number;
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string | number;
}

const MovieCrad: FC<IProps> = ({ id, imdbID, Poster, Title, Year }) => {
  return (
    <div className={style.movie_card}>
      <Link to={`${imdbID}`} style={{ textDecoration: 'none' }}>
        <div className={style.movie_iner}>
          <div className={style.movie_top}>
            <img src={Poster} alt={Title} />
          </div>
          <div className={style.movie_bottom}>
            <div className={style.movie_info}>
              <h4>{Title}</h4>
              <p>{Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCrad;
