import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { imdbId } = useParams();
  const dispatch = useDispatch();
  return <div>MovieDetail</div>;
};

export default MovieDetail;
