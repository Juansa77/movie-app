import React from 'react';
import { useState } from 'react';

import MovieCard from '../../components/Cards/MovieCard/MovieCard';
import Button from '../../components/UI/Button';
import getMovies from '../../services/getMovies';

const TopMovies = () => {
  const movieApiUrl = import.meta.env.VITE_APP_TOPRATED;
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePreviousPage = () => {
    setPage(page + 1);
  };
  const nextPage = `${movieApiUrl}&with_genres=27&page=${page}`;

  const data = getMovies(nextPage);
  return (
    <div>
      <div className="buttomContainer">
        <Button onClick={handlePreviousPage}>Previous</Button>
        <Button onClick={handleNextPage}>Next</Button>
      </div>
      <div className="categoryWrapper">
        <h1>Top movies</h1>
      </div>
      <MovieCard data={data} />
    </div>
  );
};

export default TopMovies;
