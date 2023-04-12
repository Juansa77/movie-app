import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ movie, index, handleCheck, cardsRefs }) => {
  return (
    <CardContainer>
      <Link key={index} to={`/movies/${movie.id}`}>
        <CardImage
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          alt={movie.title}
        />
        <CardTitle>{movie.title}</CardTitle>
        <CardDescription>{movie.overview}</CardDescription>
      </Link>
      <CardInputContainer>
        <CardInput
          id={`heart-${index}`}
          type="checkbox"
          ref={cardsRefs.current[index]}
          onChange={(event) =>
            handleCheck(event, movie.id, movie.title, movie.overview, movie.poster_path)
          }
        />
        <CardLabel htmlFor={`heart-${index}`}>Add to my list</CardLabel>
      </CardInputContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  min-width:23rem
  max-width: 23rem;
  min-height: min-content;
  max-height: min-content;
  border-radius: 0.5rem;

  overflow: hidden;
  -webkit-box-shadow: 4px 1px 1px -4px rgba(245, 1, 19, 1);
  -moz-box-shadow: 4px 1px 1px -4px rgba(245, 1, 19, 1);
  box-shadow: 4px 1px 12px -4px rgba(245, 1, 19, 1);
  transition:  all 0.2s ease-in-out;
  @media (max-width: 768px) {
    width: 27rem;

  }

  &:hover {
    transform: scale(1.1);
    -webkit-box-shadow: 10px 10px 22px -4px rgba(245, 50, 39, 1);
  -moz-box-shadow: 10px 10px 22px -4px rgba(245, 50, 39, 1);
  box-shadow: 10px 10px 22px -4px rgba(245, 50, 39, 1);
`;

const CardImage = styled.img`
  object-fit: cover;
  min-width: 100%;
  max-width: 100%;

  overflow: hidden;
`;

const CardTitle = styled.h1`
  text-align: center;
  color: red;
  display: none;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;

  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 0.5rem 1rem;
  min-height: 9rem;
  max-height: min-content;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const CardInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-height: min-content;
  margin-top: 1rem;
  border: 1px solid red;
  margin-bottom:2vh;
  
  -webkit-box-shadow: 10px 10px 5px -9px rgba(255, 84, 161, 1);
  -moz-box-shadow: 10px 10px 5px -9px rgba(255, 84, 161, 1);
  box-shadow: 10px 10px 5px -9px rgba(255, 84, 161, 1);
  background-color: red;
  &:hover {
    background-color: #b2070f;
`;

const CardInput = styled.input`
  display: INLINE;
`;

const CardLabel = styled.label`
  font-size: 0.6vw;
  margin-left: 0.5rem;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default Card;
