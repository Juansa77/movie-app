import './App.css';

import { Outlet } from 'react-router-dom';

import getMovies from './services/getMovies';
import getNews from './services/getNews';

function App() {
  const movieApiUrl = import.meta.env.VITE_APP_MOVIES;
  const requestMovie = getMovies(movieApiUrl);
  const requestNews = getNews();
  const movieTopRatedURL = import.meta.env.VITE_APP_TOPRATED;
  const requestTop = getMovies(movieTopRatedURL);
  const context = { requestMovie, requestNews, requestTop };

  return (
    <div className="App">
      <Outlet context={context} />
    </div>
  );
}

export default App;
