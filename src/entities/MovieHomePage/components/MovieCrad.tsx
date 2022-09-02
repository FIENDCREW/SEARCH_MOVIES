import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  id: number;
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string | number;
}

const MovieCrad: FC<IProps> = ({ id, imdbID, Poster, Title, Year }) => {
  return (
    <div>
      <img src={Poster} alt={Title} />
      <h4>{Title}</h4>
      <p>{Year}</p>
      <Link to={`${imdbID}`}>INFO IN MOVIE</Link>
    </div>
  );
};

export default MovieCrad;
