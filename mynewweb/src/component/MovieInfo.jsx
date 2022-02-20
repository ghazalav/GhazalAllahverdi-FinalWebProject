import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieURL } from '../backsrc/back-url';
import { READMOVIE_one } from '../backsrc/urls';
import MovieCard from './MovieCard';
import MovieInfoCard from './MovieInfoCard';

const fetchMovies = (movieID) => {
  return MovieURL.get(READMOVIE_one + `?movieID=${movieID}`).then((res) => {
    return res.data;
  });
};

const MovieInfo = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (movieID) {
      fetchMovies(movieID)
        .then((res) => setMovie(res))
        .catch(() => setError(true));
    }
  }, [movieID]);

  return (
    <div>
      <MovieInfoCard mov={movie} />
      {error && 'error, movie not found'}
    </div>
  );
};
export default MovieInfo;
