import React from 'react';
import './index.css';

const Movie = (options) => {
  const { title, openingDate } = options;

  return (
    <div className='movie-list'>
      <div>{title} | {openingDate}</div>
    </div>
  );
};

export default Movie;
