import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import MovieHomePage from 'entities/MovieHomePage';
import PageLayout from 'layouts/PageLayout';
import MovieDetail from 'entities/MovieDetalPage/MovieDetail';
import PlayList from 'entities/PlayList/PlayList';
import Settings from 'entities/Settings/Settings';
import Favorites from 'entities/Favorites/Favorites';
import Live from 'entities/Live/Live';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Navigate to="movie_home_page" />} />
        <Route path="movie_home_page" element={<MovieHomePage />} />
        <Route path="movie_home_page/:id" element={<MovieDetail />} />
        <Route path="/play_list" element={<PlayList />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/live" element={<Live />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
