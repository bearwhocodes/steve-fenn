import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = ({ error }) => (
  <div>
    <h1>404! Page Not Found</h1>
    <p>
      <Link to="/">Go Home</Link>
    </p>
  </div>
);

export default NotFoundPage;
