import React from 'react';
import { Link } from 'react-router-dom';

const TagLink = ({ tag }) => (
  <span>
    # <Link to={`/tags/${tag}`}>{tag}</Link>
  </span>
);

export default TagLink;
