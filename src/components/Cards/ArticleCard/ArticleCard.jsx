import './ArticleCards.css';

import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCards = ({ data }) => {
  return (
    <React.Fragment>
      {data.map((element, index) => (
        <Link key={index} to={`/noticias/${element.topic}/${element.id}`}>
          <figure className={'card'} id={element.topic} key={index}>
            <img src={element.image} alt={element.title} />
            <div className="textWrapper">
              <h1>{element.title}</h1>
              <h3>{element.author}</h3>
              <p>{element.resume}</p>
            </div>
          </figure>
        </Link>
      ))}
    </React.Fragment>
  );
};

export default ArticleCards;
