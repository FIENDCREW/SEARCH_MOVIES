import React from 'react';
import Search from 'entities/Search/Search';
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.page_header}>
      <h3>Поисковик кино:</h3>
      <Search />
    </div>
  );
};

export default Header;
