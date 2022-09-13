import React from 'react';
import SearchPage from 'entities/Search/SearchPage';
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.page_header}>
      <h3>Поисковик кино:</h3>
      <SearchPage />
    </div>
  );
};

export default Header;
