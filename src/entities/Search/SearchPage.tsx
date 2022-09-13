import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { changePage, pageSelector, searchMovie } from 'store/pages/movieSlice';
import { searchUrl } from 'api/constantes';
import style from './SearchPage.module.scss';

const SearchPage = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(pageSelector);
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value) {
        dispatch(searchMovie(searchUrl(value, page)));
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [value, page]);
  useEffect(() => {
    dispatch(changePage(1));
  }, [value]);
  return (
    <div className={style.search_input}>
      <input onChange={handleChange} placeholder="Поиск..." />
    </div>
  );
};

export default SearchPage;
