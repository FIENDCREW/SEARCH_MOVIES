import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './BackUp.module.scss';

const BackUp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate(-1)} className={style.button}>
        Назад
      </button>
    </div>
  );
};

export default BackUp;
