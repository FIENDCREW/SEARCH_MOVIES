
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import UserComponent from './entities/UsersPage/components/UserComponent';
import PageLayout from './layouts/PageLayout';
import HomePage from 'entities/HomePage';
import MoviePage from 'entities/MoviePage';
import Search from 'antd/lib/transfer/search';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home_page" element={<HomePage />} />
        <Route path="home_page/:id" element={<UserComponent />} />
        <Route path="test_page" element={<MoviePage />} />
        <Route path='search-page' element={<Search />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
