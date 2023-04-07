import './MovieCard.css';

import React from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import { createRef } from 'react';

import { UserContext } from '../../contexts/UserContext';
import Card from '../../UI/Card';

const MovieCard = ({ data }) => {
  const movies = data.results;
  //Nos traemos user del UserContext para nombrar el array de LocalStorage
  const { user } = useContext(UserContext);

  //Creamos movielist y lo seteamos. Aquí tendremos la lista de los favoritos del usuario
  const [movieList, setMovieList] = useState([]);

  //Al renderizar, solicitamos a localstorage si hay datos con ese nombre de user
  useEffect(() => {
    //creamos una variable para solicitar el array del usuario
    const storedData = localStorage.getItem(`${user}-array`);
    //si lo hay, lo seteamos en Movielist
    if (storedData) {
      setMovieList(JSON.parse(storedData));
    }
  }, [user]);
  //hacerlo con tokens

  /* HandleCheck es la función del checkbox encargada de añadir un elemento al localStorage. El array en LocalStorage se crea cada vez , con los datos actualizados de movieList,que se activa la función*/
  const handleCheck = (event, id, title, text, image) => {
    //cuando hacemos check, metemos los datos del map en una constante y hacemos un find para ver si ya están en el array
    if (event.target.checked) {
      const movie = { id: id, title: title, text: text, image: image };
      //hacemos un ARRAY nuevo para hacer find  y ver si la ID está repetida en movieList
      const movieExists = movieList.find((movie) => movie.id === id);
      //si no hay nada en movielist, lo metemos
      if (!movieExists) {
        //constante para hacer una copia de la última versión de movieList y le agregamos la película
        const updatedList = [...movieList, movie];
        //Lo metemos en MovieList
        setMovieList(updatedList);
        //actualizamos los datos del array
        localStorage.setItem(`${user}-array`, JSON.stringify(updatedList));
      }
    }
  };
  //NO ESTAMOS USANDO LOS REFS (lo dejo porque ya está hecho) Creamos un array para generar las ref de cada figure. Cuando cardsRefs recibe el index, crea la Ref. Usamos useRef y createRef
  const cardsRefs = useRef([]);
  //En el array, ponemos como el valor current el mapeo de data y cuando recibe index, crea la ref del elemento
  if (movies) {
    cardsRefs.current = movies.map(
      (element, index) => cardsRefs.current[index] ?? createRef(),
    );
  }
  return (
    <div className="movieContainer">
      {data.length != 0 &&
        movies.map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
            handleCheck={handleCheck}
            cardsRefs={cardsRefs}
          />
        ))}
    </div>
  );
};

export default MovieCard;
