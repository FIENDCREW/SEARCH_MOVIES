import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  id: number;
  Poster: string;
  Title: string;
  Year: string;
}

const MovieCrad: FC<IProps> = ({ id, Poster, Title, Year }) => {
  return (
    <div>
      <img src={Poster} alt={Title} />
      <h4>{Title}</h4>
      <p>{Year}</p>
      <Link to={`${id}`}>INFO IN MOVIE</Link>
    </div>
  );
};

export default MovieCrad;
