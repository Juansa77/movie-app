import './FavouriteCard.css';

import React from 'react';

const FavouriteCard = ({ data, handleDelete }) => {
  return (
    <React.Fragment>
      <div className="favouriteContainer">
        {data.map((movie) => (
          <figure key={data.id} className="movieFavourite">
            <h1>{movie.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.image}`}
              alt="movie.title"
            />
            <p>{movie.text}</p>
            <input id="heart" type="checkbox" onChange={handleDelete} />
            <label htmlFor="input">Remove from my list</label>
          </figure>
        ))}
      </div>
    </React.Fragment>
  );
};

export default FavouriteCard;
