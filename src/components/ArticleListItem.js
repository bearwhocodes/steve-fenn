import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import TagLink from './TagLink';

const ArticleListItem = ({
  id,
  title,
  summary,
  published_at: publishedAt,
  reading_time: readingTime,
  tags,
  image,
  simple
}) => (
  <div>
    {simple ? (
      <div>
        <p>
          <Link to={`/articles/${id}`}>{title}</Link>
        </p>
        <p>{summary}</p>
        <p>
          <img src={image} alt={title} />
        </p>
      </div>
    ) : (
      <div>
        <p>
          <Link to={`/articles/${id}`}>{title}</Link>
        </p>
        <p>{summary}</p>
        <p>{moment(publishedAt).fromNow()}</p>
        <p>Reading Time: {readingTime}</p>
        {tags && tags.map((tag, index) => <TagLink key={index} tag={tag} />)}
        <p>
          <img src={image} alt={title} />
        </p>
      </div>
    )}
  </div>
);

export default ArticleListItem;
