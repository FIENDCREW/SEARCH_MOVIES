import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import PageLayout from './layouts/PageLayout';
import HomePage from 'entities/HomePage';
import Search from 'antd/lib/transfer/search';
import PlayList from 'entities/PlayList/PlayList';
import Live from 'entities/Live/Live';
import Settings from 'entities/Settings/Settings';
import MovieDetail from 'entities/MoviePage/components/MovieDetail';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home_page" element={<HomePage />} />
        <Route path="search" element={<Search />} />
        <Route path="favorites" element={<MovieDetail />} />
        <Route path="search-page" element={<Search />} />
        <Route path="play_list" element={<PlayList />} />
        <Route path="live" element={<Live />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
