import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import PageLayout from './layouts/PageLayout';
import PlayList from 'entities/PlayList/PlayList';
import Live from 'entities/Live/Live';
import Settings from 'entities/Settings/Settings';
import MovieDetail from 'entities/MovieHomePage/components/MovieDetail';
import MoviePage from 'entities/MovieHomePage';
import MovieBackUpPage from 'entities/MovieHomePage/components/MovieBackUpPage';
import SearchPage from 'entities/Search';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<MoviePage />} />
        <Route path="movie_home_page" element={<MoviePage />} />
        <Route path="movie_home_page/:id" element={<MovieBackUpPage />} />
        <Route path="favorites" element={<MovieDetail />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="play_list" element={<PlayList />} />
        <Route path="live" element={<Live />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
