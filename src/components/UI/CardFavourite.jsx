import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardFavourite = ({ movie, index, handleDelete }) => {
  return (
    <Card key={movie.id}>
      <Link key={index} to={`/movies/${movie.id}`}>
        <ImageWrapper>
          <Image
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.image}`}
            alt={movie.title}
          />
        </ImageWrapper>
      </Link>
      <Content>
        <Title>{movie.title}</Title>
        <Overview>{movie.text}</Overview>
        <CardInputContainer>
          <Checkbox id={index} type="checkbox" onChange={handleDelete} />

          <Label htmlFor={index}>Remove from my list</Label>
        </CardInputContainer>
      </Content>
    </Card>
  );
};

const Card = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  width: 95%;
  min-height: 25vh;
  max-height: min-content;
  border-radius: 0.5rem;

  overflow: hidden;
  -webkit-box-shadow: 10px 1px 12px -4px rgba(245, 1, 19, 1);
  -moz-box-shadow: 10px 1px 12px -4px rgba(245, 1, 19, 1);
  box-shadow: 10px 1px 12px -4px rgba(245, 1, 19, 1);
  transition:  all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.01);
    -webkit-box-shadow: 10px 10px 22px -4px rgba(245, 50, 39, 1);
  -moz-box-shadow: 10px 10px 22px -4px rgba(245, 50, 39, 1);
  box-shadow: 10px 10px 22px -4px rgba(245, 50, 39, 1);
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  border-radius: 5px;

  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  object-fit: cover;
  object-position: center;
`;

const Content = styled.figcaption`
  display: flex;
  flex-direction: column;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 1rem;
`;

const Title = styled.h1`
  margin: 0 0 10px;
  font-size: 1.5rem;
  font-weight: 600;
  display: none;
`;

const Overview = styled.p`
  margin: 0 0 10px;
  font-size: 0.8rem;
  line-height: 1.4;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const Checkbox = styled.input``;

const CardInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  border: 1px solid red;
  font-family: 'Raleway-Bold';

  background-color: red;
`;

const Label = styled.label`
  font-size: 0.8rem;
  cursor: pointer;

  ${Checkbox}:checked + &::before {
    background-color: #fff;
  }
`;

export default CardFavourite;
