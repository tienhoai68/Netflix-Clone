import React, { useEffect, useState } from 'react'
import { movieService } from '../../services/Movie';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const movieRamdom = movies[Math.floor(Math.random() * movies.length)]

  const fetchMovieNowPlaying = async () => {
    try {
      const result = await movieService.fetchMovieNowPlayingApi();
      setMovies(result.data.results)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(movieRamdom);
  useEffect(() => {
    fetchMovieNowPlaying();
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home
