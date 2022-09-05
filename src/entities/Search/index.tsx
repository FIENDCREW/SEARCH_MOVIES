import React, { useEffect } from 'react';
import { infoUrl } from 'api/constantes';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSearchDataAction } from 'store/pages/SearchPage/actions';
import { getSearchData } from 'store/pages/SearchPage/selectors';
import Search from './componentes/Search';

const SearchPage = () => {
  const dispatch = useDispatch();
  const seacrchsData = useSelector(getSearchData);

  const getSearch = async (baseUrl: string) => {
    const responce = await fetch(baseUrl);
    const search = await responce.json();
    dispatch(setSearchDataAction(search));
  };

  useEffect(() => {
    getSearch(infoUrl);
  }, []);

  return !seacrchsData ? <div>not found</div> : <Search Title={''} />;
};

export default SearchPage;
