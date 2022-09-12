import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { changePage, pageSelector } from 'store/pages/movieSlice';
import style from './Pagination.module.scss';

interface IProps {
  limit: number;
  totalResults: number;
}

const Pagination: FC<IProps> = ({ limit, totalResults }) => {
  const pagesAmount = Math.ceil(totalResults / limit);
  const pagesArray: number[] = [];
  const page = useAppSelector(pageSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handlePages = (page: number) => {
    dispatch(changePage(page));
  };
  useEffect(() => navigate(`?page=${page}`), [page]);
  for (let i = 1; i <= pagesAmount; i++) {
    pagesArray.push(i);
  }

  return (
    <div>
      {pagesArray.map((page) => (
        <button
          key={`key${page}`}
          type="button"
          onClick={() => handlePages(page)}
          className={style.button_pag}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
