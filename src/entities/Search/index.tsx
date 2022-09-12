import { useAppDispatch, useAppSelector } from 'store/hooks';
import React, { useEffect, useState } from 'react';
import { changePage, pageSelector, searchMovie } from 'store/pages/movieSlice';
import { searchUrl } from 'api/constantes';

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
  return <input onChange={handleChange} />;
};

export default SearchPage;
