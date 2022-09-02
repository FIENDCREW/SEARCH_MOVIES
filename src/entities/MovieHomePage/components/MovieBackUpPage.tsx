import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieBackUpPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        Back UP
      </button>
      <div>Movie Page {id}</div>
    </div>
  );
};

export default MovieBackUpPage;
