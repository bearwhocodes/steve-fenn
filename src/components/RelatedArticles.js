import React from 'react';

import ArticleListItem from './ArticleListItem';

const RelatedArticles = ({ articles }) => (
  <div>
    {articles &&
      articles.map((article, index) => (
        <ArticleListItem key={article.id} simple {...article} />
      ))}
  </div>
);

export default RelatedArticles;
