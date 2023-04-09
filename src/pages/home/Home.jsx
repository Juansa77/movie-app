import './Home.css';

import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import { UserContext } from '../../components/contexts/UserContext';

const Home = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onFormSubmit = (values) => {
    login(values.username);
  };
  //Nos traemos el login del userContext mediante destructuring
  const { login } = useContext(UserContext);

  //useNavigate nos proporciona un link  los elementos definidos en Routes

  return (
    <div className="loginContainer">
      {!localStorage.getItem('user') ? (
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <h3>Por favor, introduzca su nombre de usuario</h3>
          <input
            className="userInput"
            type="text"
            {...register('username', {
              required: true, // Si no hay valor, no activará la función del login
              minLength: 2, // Si no tiene al menos dos letras, no activa la función
            })}
            placeholder="Nombre de usuario"
          />
          {/* Mostramos el error si no hay username ya que es requerido */}
          {errors.username ? (
            <p className="error">Campo obligatorio, debe tener al menos dos caracteres</p>
          ) : null}
          {/*Al pulsar en el botón, llama a la funcuión user para que meta en localStorage el valor del input*/}
          <button className="buttonSubmit" type="submit">
            Ingresar
          </button>{' '}
        </form>
      ) : (
        <>
          <Navigate replace to="/main" />
        </>
      )}
    </div>
  );
};

export default Home;
