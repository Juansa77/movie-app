import './Movies.css';

import React from 'react';
import { useState } from 'react';

import MovieCard from '../../components/Cards/MovieCard/MovieCard';
import getMovies from '../../services/getMovies';

const Movies = () => {
  const movieApiUrl = import.meta.env.VITE_APP_MOVIES;
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePreviousPage = () => {
    setPage(page + 1);
  };
  const nextPage = `${movieApiUrl}&page=${page}`;

  const data = getMovies(nextPage);
  return (
    <div>
      <div className="buttomContainer">
        <button onClick={handlePreviousPage}>Página anterior</button>
        <button onClick={handleNextPage}>Siguiente página</button>
      </div>
      <MovieCard data={data} />
    </div>
  );
};

export default Movies;
