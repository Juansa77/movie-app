import './App.css';

import { Outlet } from 'react-router-dom';

import getMovies from './services/getMovies';
import getNews from './services/getNews';

function App() {
  const movieApiUrl = import.meta.env.VITE_APP_MOVIES;
  const requestMovie = getMovies(movieApiUrl);
  const requestNews = getNews();

  return (
    <div className="App">
      <Outlet context={([requestMovie], [requestNews])} />
    </div>
  );
}

export default App;
