import './InitialGallery.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const InitialGallery = () => {
  return (
    <section>
      <NavLink to="/movies">
        <img
          src="https://s1.ppllstatics.com/elcorreo/www/multimedia/202210/21/media/cortadas/terrifer-2-pelicula-vomitar-kg8E-U180454040710sMD-624x385@El%20Correo.jpg"
          alt="element1"
        />
      </NavLink>

      <NavLink to="/news">
        <img
          src="https://assets.reedpopcdn.com/-1634728999092.jpg/BROK/thumbnail/1200x1200/quality/100/-1634728999092.jpg"
          alt="loquesea2"
        />
      </NavLink>

      <NavLink to="/profile">
        <img
          src="https://s2.ppllstatics.com/elcorreo/www/multimedia/202201/14/media/cortadas/SCR_FP_%20018_R-kmhF-U1605400341215dD-1248x770@RC.jpg"
          alt="loquesea3"
        />
      </NavLink>
    </section>
  );
};

export default InitialGallery;
