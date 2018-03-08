import React from 'react';
import { Link } from 'react-router-dom';

const ErrorMessage = ({ error }) => (
  <div>
    <h1>Oops something has gone wrong!</h1>
    <p>{this.props.error}</p>
    <p>
      <Link to="/">Go Home</Link>
    </p>
  </div>
);

export default ErrorMessage;
