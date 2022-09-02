import React, { FC } from 'react';
import { IMovies } from 'interfaces/IMovies';
import MovieCrad from './MovieCrad';
import PageNotFound from 'entities/PageNotFound/PageNotFound';
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
            const { id, Title, Poster, Year } = movie;
            return (
              <React.Fragment key={`MovieId:${id}`}>
                <MovieCrad id={id || 0} Poster={Poster} Title={Title} Year={Year} />
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
