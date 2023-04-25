/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../contexts/UserContext';
import Hamburger from './Hamburger';

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toogleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  //Hacemos destructuring para sacar las funciones logOut y user del UserContext
  const { logOut, user } = useContext(UserContext);

  return (
    <React.Fragment>
      {user && (
        <div className="navigation">
          <ul>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/movies">
              <li>Movies</li>
            </NavLink>
            <NavLink to="/topmovies">
              <li>Top Movies</li>
            </NavLink>
            <NavLink to="/news">
              <li>News</li>
            </NavLink>
            <NavLink to="/profile">
              <li>Favourites</li>
            </NavLink>
            <li className="userName">{`Hola, ${user}`}</li>
            <li>
              <NavLink to="/" onClick={() => logOut()}>
                Salir
              </NavLink>
            </li>
          </ul>
          <div onClick={toogleHamburger}>
            <Hamburger isOpen={hamburgerOpen} />
          </div>
          <style jsx>{`
            .navigation {
              width: 100%;
              height: 2vh;
              margin-bottom: 10vh;
            }
            .navigation ul {
              display: flex;
              justify-content: space-around;
              margin: 0 20px;
              padding: 0 25px;
            }
            .navigation ul li {
              list-style-type: none;
              max-width: 100%;
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            }
            @media (max-width: 767px) {
              .hamburger {
                display: fixed;
                float: right;
                padding-top: 10px;
                width: 5vw;
                padding-left: 3vw;
                margin-right: 3vw;

                z-index: 6;
              }

              .navigation ul {
                display: ${hamburgerOpen ? 'inline' : 'none'};
                text-align: left;
                padding: 5vh;
                background-color: black;
                background-color: white;
                color: white;
                z-index: 10;
                height: 100vh;
                width: 50vw;
                margin-top: 50px;
                position: fixed;
                color: black;
              }
              .navigation ul li {
                margin-top: 3vh;
              }
              .navigation ul li:hover {
                background-color: white;
                color: black;
              }
              .burger {
                width: ${hamburgerOpen ? '3rem' : '3rem'};
              }
            }
          `}</style>
        </div>
      )}
    </React.Fragment>
  );
};

export default NavBar;
