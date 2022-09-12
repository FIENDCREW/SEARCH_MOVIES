import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={style.page_footer}>
      <div>Приложение для поиска фильмов с подробной информацией</div>
      <p>©2022, Movie, imDB</p>
    </div>
  );
};

export default Footer;
