import './Detail.css';

import React from 'react';
import { createRef, useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { UserContext } from '../../components/contexts/UserContext';
import Card from '../../components/UI/Card';
import getMovies from '../../services/getMovies';

const Detail = () => {
  const { movieID } = useParams();
  const movieApiUrl = import.meta.env.VITE_APP_SINGLEMOVIE;
  const apiKEY = import.meta.env.VITE_APP_APIKEY;

  //const movieDetail = `${movieApiUrl}/${movieID}?api_key=${apiKEY}`;
  //const movieDetail = requestTop.find((element) => element.id === movieID);
  const similarMovie = `${movieApiUrl}/${movieID}/similar?api_key=${apiKEY}`;

  const data = getMovies(similarMovie);
  const movies = data.results;

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

  console.log(movies);
  return (
    <div className="similarMoviesContainer">
      {data.results && data.results.length > 0 ? (
        data.results.map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
            handleCheck={handleCheck}
            cardsRefs={cardsRefs}
          />
        ))
      ) : (
        <h1>No recommendations available</h1>
      )}
    </div>
  );
};

export default Detail;
