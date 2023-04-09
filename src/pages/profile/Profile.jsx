import './Profile.css';

import React from 'react';
import { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../components/contexts/UserContext';
import CardFavourite from '../../components/UI/CardFavourite';

const Profile = () => {
  /* const singleMovieURL = import.meta.env.VITE_APP_SINGLEMOVIE;
  const apiKey = import.meta.env.VITE_APP_APIKEY;
  const movieID = 1023313;

  const singleMovieDirection = `${singleMovieURL}${movieID}?api_key=${apiKey}`;
  const singleMovie = getMovies(singleMovieDirection);
  console.log(singleMovie);
*/
  //Nos traemos USER del context para solicitar el array del localStorage
  const { user } = useContext(UserContext);
  //seteamos la data, aquí vamos a meter los datos actualizados de los favoritos del LocalStorage
  const [data, setData] = useState([]);

  //cuando se renderiza, solicitamos los datos del localStorage y lo metemos en data
  useEffect(() => {
    const miData = localStorage.getItem(`${user}-array`);
    if (miData) {
      setData(JSON.parse(miData));
    }
  }, []);
  //handleDelete recibe la ID del checkbox a través del event, ya que hemos asociado la ID del input a la ID obtenida en el .map, y elimina del array el objeto seleccionado
  const handleDelete = (event) => {
    //aquí obtenemos la id del checkbox concreto que se ha pulsado
    const index = event.target.id;
    // obtenemos una copia actualizada de data, hecha con spread
    const newData = [...data];
    //En la copia actualizada, eliminamos la  posicion del elemento seleccionado con splice y el valor del index
    newData.splice(index, 1); // elimina 1 elemento del array en la posición indicada
    //Una vez eliminado el elemento, seteamos data al resultado
    setData(newData);
    //le pasamos al local storage el nuevo resultado, volvemos a crear el array con estos datos.
    localStorage.setItem(`${user}-array`, JSON.stringify(newData));
  };

  return (
    <div>
      <React.Fragment>
        <div className="categoryWrapper">
          <h1>Your movies</h1>
        </div>
        {data.length > 0 ? (
          <div className="favouriteContainer">
            {data.map((movie, index) => (
              <CardFavourite
                movie={movie}
                handleDelete={handleDelete}
                key={movie.id}
                index={index}
              />
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
