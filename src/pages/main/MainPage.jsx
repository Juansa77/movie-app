import './MainPage.css';

import React from 'react';
import { useOutletContext } from 'react-router-dom';

import InitialGallery from '../../components/Gallery/InitialGallery';
import RandomNew from '../../components/RandomNew/RandomNew';

const MainPage = () => {
  const { requestNews } = useOutletContext();

  return (
    <React.Fragment>
      <div className="categoryWrapper">
        <h1>Your content</h1>
      </div>
      <InitialGallery />
      <div className="categoryWrapper">
        <h1>Featured content</h1>
      </div>
      <RandomNew data={requestNews} />
    </React.Fragment>
  );
};

export default MainPage;
