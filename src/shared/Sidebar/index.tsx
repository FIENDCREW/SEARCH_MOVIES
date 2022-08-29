import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarConfig } from './sidebarConfig';
import { sidebarConfigOther } from './sidebarConfigOther';
import style from './Sidebar.module.scss';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.sidebar_wrapper}>
      <p>Меню</p>
      <ul className={style.sidebar_menu}>
        {sidebarConfig.map((menuItem) => {
          const isActiveClassName = pathname.includes(menuItem.path) ? style.active : '';
          return (
            <Link
              key={menuItem.id}
              to={menuItem.path}
              className={`${isActiveClassName} ${style.sidebar_menu_item}`}>
              <li>{menuItem.name}</li>
            </Link>
          );
        })}
      </ul>
      <p>Другое</p>
      <ul className={style.sidebar_menu}>
        {sidebarConfigOther.map((otherItem) => {
          const isActiveClassName = pathname.includes(otherItem.path) ? style.active : '';
          return (
            <Link
              key={otherItem.id}
              to={otherItem.path}
              className={`${isActiveClassName} ${style.sidebar_menu_item}`}>
              <li>{otherItem.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
