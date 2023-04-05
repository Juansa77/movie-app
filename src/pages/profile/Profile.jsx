import './Profile.css';

import React from 'react';
import { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../components/contexts/UserContext';

const Profile = () => {
  /* const singleMovieURL = import.meta.env.VITE_APP_SINGLEMOVIE;
  const apiKey = import.meta.env.VITE_APP_APIKEY;
  const movieID = 1023313;

  const singleMovieDirection = `${singleMovieURL}${movieID}?api_key=${apiKey}`;
  const singleMovie = getMovies(singleMovieDirection);
  console.log(singleMovie);
*/
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  //cuando se renderiza, solicitamos los datos del localStorage
  useEffect(() => {
    const miData = localStorage.getItem(`${user}-array`);
    if (miData) {
      setData(JSON.parse(miData));
    }
  }, []);
  //handleDelete recibe la ID del evento, ya que hemos asociado la ID del input a la ID obtenida en el .map
  const handleDelete = (event) => {
    const index = event.target.id;
    // le metemos el valor del Index, que lo obtenemos al hacer click del elemento y creamos un nuevo array haciendo un spread de data
    const newData = [...data];
    //eliminamos su posicion con splice y el valor del index
    newData.splice(index, 1); // elimina 1 elemento del array en la posición indicada
    //seteamos data al resultado
    setData(newData);
    //le pasamos al local storage el nuevo resultado
    localStorage.setItem(`${user}-array`, JSON.stringify(newData));
  };

  return (
    <div>
      <React.Fragment>
        {data.length > 0 ? (
          <div className="favouriteContainer">
            {data.map((movie, index) => (
              <figure key={data.id} className="movieFavourite">
                <h1>{movie.title}</h1>
                <img
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.image}`}
                  alt="movie.title"
                />
                <p>{movie.text}</p>
                <input id={index} type="checkbox" onChange={handleDelete} />
                <label htmlFor={index}>Remove from my list</label>
              </figure>
            ))}
          </div>
        ) : (
          <div>
            <h1>NO FAVOURITES YET!!</h1>
          </div>
        )}
      </React.Fragment>
    </div>
  );
};

export default Profile;
