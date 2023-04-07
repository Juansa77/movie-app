import React from 'react';
import styled from 'styled-components';

const Card = ({ movie, index, handleCheck, cardsRefs }) => {
  return (
    <CardContainer>
      <CardImage
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
        alt={movie.title}
      />
      <CardTitle>{movie.title}</CardTitle>
      <CardDescription>{movie.overview}</CardDescription>
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
  width: 23rem;
  min-height: 45rem;
  max-height: 45rem;
  border-radius: 0.5rem;

  overflow: hidden;
  -webkit-box-shadow: 10px 10px 5px -9px rgba(255, 84, 161, 1);
  -moz-box-shadow: 10px 10px 5px -9px rgba(255, 84, 161, 1);
  box-shadow: 10px 10px 5px -9px rgba(255, 84, 161, 1);
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 30rem;
`;

const CardTitle = styled.h1`
  font-size: 2.2rem;
  margin: 1rem;
  text-align: center;
  color: red;
  display: none;
`;

const CardDescription = styled.p`
  font-size: 1-5rem;

  font-family: 'Raleway-Bold';
  margin: 0.5rem 1rem;
  min-height: 13vh;
  max-height: 13vh;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
`;

const CardInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-top: 1rem;
  border: 1px solid red;
  font-family: 'Raleway-Bold';
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
  font-size: 1rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export default Card;
