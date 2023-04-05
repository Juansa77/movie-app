import './MovieCard.css';

import React from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import { createRef } from 'react';

import { UserContext } from '../../contexts/UserContext';

const MovieCard = ({ data }) => {
  const movies = data.results;
  //Nos traemos user del UserContext para nombrar el array de LocalStorage
  const { user } = useContext(UserContext);
  //Creamos una array para el seteo del check, ya que están todos los elementos del map
  const [isChecked, setIsChecked] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem(`${user}-array`);
    if (storedData) {
      setMovieList(JSON.parse(storedData));
    }
  }, [user]);

  const handleCheck = (event, id, title, text, image) => {
    var updatedList = [...isChecked];
    if (event.target.checked) {
      const movie = { id: id, title: title, text: text, image: image };
      //hacemos un ARRAY nuevo para hacer find  y ver si la ID está repetida en movieList
      const movieExists = movieList.find((movie) => movie.id === id);
      if (!movieExists) {
        //si no está la ID la metemos en el array Updatedlist
        const updatedList = [...movieList, movie];
        setMovieList(updatedList);
        localStorage.setItem(`${user}-array`, JSON.stringify(updatedList));
      }
    }
    setIsChecked(updatedList);
  };
  //Creamos un array para generar las ref de cada figure. Cuando cardsRefs recibe el index, crea la Ref. Usamos useRef y createRef
  const cardsRefs = useRef([]);
  //En el array, ponemos como el valor current el mapeo de data y cuando recibe index, crea la ref del elemento
  if (movies) {
    cardsRefs.current = movies.map(
      (element, index) => cardsRefs.current[index] ?? createRef(),
    );
    console.log(movieList);
  }
  return (
    <div className="movieContainer">
      {data.length != 0 &&
        movies.map((movie, index) => (
          <div className="movie" key={index}>
            <h1>{movie.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
              alt="movie.title"
            />
            <p>{movie.overview}</p>
            <div className="inputContainer">
              <input
                id="heart"
                type="checkbox"
                ref={cardsRefs.current[index]}
                onChange={(event) =>
                  handleCheck(
                    event,
                    movie.id,
                    movie.title,
                    movie.overview,
                    movie.poster_path,
                  )
                }
              />
              <label htmlFor="input">Add to my list</label>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieCard;
