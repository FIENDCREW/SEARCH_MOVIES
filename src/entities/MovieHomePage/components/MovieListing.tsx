import React, { FC } from 'react';
import MovieCrad from './MovieCrad';
import PageNotFound from 'entities/PageNotFound/PageNotFound';
import { IMovies } from 'interfaces/IMovies';
import Pagination from '../../../shared/Pagination/index';

interface IProps {
  movieDataAttr: IMovies[];
}

const MovieListing: FC<IProps> = ({ movieDataAttr }) => {
  return (
    <div>
      <p>List Movies:</p>
      <div>
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
          <div>
            <PageNotFound />
          </div>
        )}
        <Pagination limit={4} itemsAmount={movieDataAttr.length} />
      </div>
    </div>
  );
};

export default MovieListing;
