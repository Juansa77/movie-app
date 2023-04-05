import './ArticleCards.css';

import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCards = ({ data }) => {
  return (
    <div>
      <div className="cardContainer">
        {data.map((element, index) => (
          <Link key={index} to={`/noticias/${element.topic}/${element.id}`}>
            <figure className={'card'} id={element.topic} key={index}>
              <img src={element.image} alt={element.title} />

              <h1>{element.title}</h1>
              <h3>{element.author}</h3>
              <p>{element.text}</p>
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleCards;
