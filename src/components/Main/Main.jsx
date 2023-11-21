import React, { useEffect, useState } from 'react'
import { movieService } from '../../services/Movie';

const Main = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovieNowPlaying = async () => {
    try {
      const result = await movieService.fetchMovieNowPlayingApi();
      // console.log(result.data.results.title);
      setMovies(result.data.results)
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(movies);
  useEffect(() => {
    fetchMovieNowPlaying();
  }, [])

  return (
    <div>Main</div>
  )
}

export default Main
