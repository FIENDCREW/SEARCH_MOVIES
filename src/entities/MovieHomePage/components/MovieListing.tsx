import React, { FC } from 'react';
import { IMovies } from 'interfaces/IMovies';
import MovieCrad from './MovieCrad';
import style from '../MovieHomePage.module.scss';

interface IProps {
  movieDataAttr: IMovies[];
}

const MovieListing: FC<IProps> = ({ movieDataAttr }) => {
  return (
    <div>
      <h3>Фильмы:</h3>
      <div className={style.movie_list}>
        {movieDataAttr.length ? (
          movieDataAttr.map((movie) => {
            const { id, imdbID, Title, Poster, Year } = movie;
            return (
              <React.Fragment key={`MovieId:${imdbID}`}>
                <MovieCrad id={id || 0} Poster={Poster} Title={Title} Year={Year} imdbID={imdbID} />
              </React.Fragment>
            );
          })
        ) : (
          <div>PAGE_NOT_FOUND</div>
        )}
      </div>
    </div>
  );
};

export default MovieListing;
