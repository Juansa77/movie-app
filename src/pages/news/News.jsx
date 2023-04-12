import React from 'react';
import { useOutletContext } from 'react-router-dom';

import ArticleCards from '../../components/Cards/ArticleCard/ArticleCard';

const News = () => {
  const { requestNews } = useOutletContext();

  return (
    <div>
      <ArticleCards data={requestNews} />
    </div>
  );
};

export default News;
