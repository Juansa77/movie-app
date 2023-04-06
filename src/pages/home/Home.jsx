import React from 'react';
import { useContext, useRef } from 'react';
import { Navigate } from 'react-router-dom';

import { UserContext } from '../../components/contexts/UserContext';

const Home = () => {
  //Nos traemos el login del userContext mediante destructuring
  const { login } = useContext(UserContext);

  //useNavigate nos proporciona un link  los elementos definidos en Routes

  const textInput = useRef(null);

  return (
    <div className="loginContainer">
      {!localStorage.getItem('user') ? (
        <>
          <h3>Por favor, introduzca su nombre de usuario</h3>
          <input type="text" ref={textInput} placeholder="Nombre de usuario" />
          {/*Al pulsar en el botón, llama a la funcuión user para que meta en localStorage el valor del input*/}
          <button onClick={() => login(textInput.current.value)}>Ingresar</button>{' '}
        </>
      ) : (
        <>
          <Navigate replace to="/main" />
        </>
      )}
    </div>
  );
};

export default Home;
