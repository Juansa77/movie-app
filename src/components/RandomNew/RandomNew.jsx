import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const RandomNew = ({ data }) => {
  const [randomIndex, setRandomIndex] = useState(0);
  const newsLength = data.length;

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * (newsLength - 1) + 1));
  }, [newsLength]);

  return (
    <React.Fragment>
      {randomIndex != 0 && (
        <CardRandom className="cardRandom">
          <CardImage alt={data[randomIndex].title} src={data[randomIndex].image} />
          <CardContent>
            <h1>{data[randomIndex].title}</h1>
            <h3>{data[randomIndex].author}</h3>
            <p>{data[randomIndex].resume}</p>
          </CardContent>
        </CardRandom>
      )}
    </React.Fragment>
  );
};

const CardRandom = styled.figure`
  position: relative; /* para que el contenido esté posicionado relativo a la tarjeta */
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  overflow: hidden; /* para que el contenido no se salga de la tarjeta */
  margin-top: 10vh;
`;

const CardContent = styled.div`
  position: absolute; /* para que el contenido esté posicionado encima de la imagen */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 30vh;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;

  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  z-index: 1;

  & h1 {
    margin: 0;
    font-size: 3vh;

    font-weight: 700;
    max-height: min-content;
    min-height: min-content;
    color: white;
  }

  & h3 {
    margin: 0;
    font-size: 1vh;

    max-height: min-content;
    min-height: min-content;
  }

  & p {
    margin: 0;
    font-size: 2vh;
    line-height: 1.5;
    margin-top: 2vh;
    max-height: min-content;
    min-height: min-content;

    overflow: hidden;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;
  z-index: 0;

  /* para aplicar efecto hover */
  ${CardRandom}:hover & {
    transform: scale(1.1);
  }

  /* para aplicar opacidad al contenido cuando se pasa el mouse por encima de la imagen */
  ${CardRandom}:hover + ${CardContent} {
    opacity: 1;
  }
`;

export default RandomNew;
