import React, { useState, useEffect } from 'react';
import './index.css';

import { fetchData } from '../api/kobis';
import Movie from '../Movie';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const { boxOfficeResult } = await fetchData();

        setIsLoading(true);
        setMovieList(boxOfficeResult);
      } catch (err) {
        setErrorMessage(err.message);
      }
    };

    getMovieList();
  }, []);

  const MovieListChildren = movieList?.dailyBoxOfficeList.map((movie) => {
    return (
      <Movie
        key={movie.movieCd}
        title={movie.movieNm}
        openingDate={movie.openDt}
      />
    );
  });

  if (errorMessage) {
    return <div>{errorMessage}</div>
  }

  return (
    <>
      {errorMessage ||
        <div>
          {isLoading
            ? <div className='movie-container'>{MovieListChildren}</div>
            : <div>리스트를 불러오는 중입니다.</div>
          }
        </div>}
    </>
  );
};

export default App;
