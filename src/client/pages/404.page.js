import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  return (
    <h2>404 Page not found</h2>
  )
}
export default NotFoundPage;