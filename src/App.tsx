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
import Dashboards from 'entities/Dashboardsrc/Dashboards';
import Preferences from 'entities/Preferences/Preferences';
//import Login from 'entities/Login/Login';

// const setToken = (userToken: any) => {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }
// const getToken = () => {
//   const tokenString: string | null = sessionStorage.getItem('token');
//   if (typeof tokenString === "string") {
//     const userToken = JSON.parse(tokenString);
//   }
//   }
//   return userToken?.token
// }
// const token = getToken();
// // @ts-ignore
// if (!token) {
//   return <Login setToken={setToken} />
//}
// const [token, setToken] = useState();
// if (!token) {
//   return <Login setToken={setToken} />
// }

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
        <Route path="/dashboards" element={<Dashboards />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
