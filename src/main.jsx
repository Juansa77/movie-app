import './index.css';

import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { UserContextProvider } from './components/contexts/UserContext';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/ProtectedRoute';
import Title from './components/Title/Title';
import Detail from './pages/Detail/Detail';
import Home from './pages/home/Home';
import MainPage from './pages/main/MainPage';
import Movies from './pages/movies/Movies';
import News from './pages/news/News';
import Profile from './pages/profile/Profile';
import TopMovies from './pages/TopMovies/TopMovies';
import GlobalStyles from './style/GlobalStyles';
import { theme } from './style/theme';
import { createTheme } from './style/utils';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme(theme)}>
      <BrowserRouter>
        <UserContextProvider>
          <GlobalStyles />
          <Title />
          <NavBar />
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route
                path="/main"
                element={
                  <ProtectedRoute>
                    <MainPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/movies"
                element={
                  <ProtectedRoute>
                    <Movies />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/movies/:movieID"
                element={
                  <ProtectedRoute>
                    <Detail />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/topmovies"
                element={
                  <ProtectedRoute>
                    <TopMovies />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/news"
                element={
                  <ProtectedRoute>
                    <News />{' '}
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={
                  <div>
                    <h1>404</h1>
                    <p>La página no existe</p>
                  </div>
                }
              />
            </Route>
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
