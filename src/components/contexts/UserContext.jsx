import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  //Seteamos el user con useState al balor de id de localStorage
  const [user, setUser] = useState(() => {
    const ID = localStorage.getItem('user');
    return ID ? ID : null;
  });
  const navigate = useNavigate();

  //Definimos la función del Login, creando el objeto user y seteandolo
  const login = (user) => {
    localStorage.setItem('user', user);
    setUser(user);
    //Navega a home cuando toma el localstorage tiene el valor User
    navigate('/main');
  };
  //Definimos la función del logOut, borra el user del LocalStorage
  const logOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logOut, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
