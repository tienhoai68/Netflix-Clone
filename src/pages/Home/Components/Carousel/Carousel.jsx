import React, { useEffect, useState } from 'react'
import { movieService } from '../../../../services/Movie';

const Carousel = () => {
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
  useEffect(() => {
    fetchMovieNowPlaying();
  }, [])
  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movieRamdom?.backdrop_path}`} alt={movieRamdom?.title} />
        <div className='absolute w-full top-[20%] p-6 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movieRamdom?.title}</h1>
          <div className='my-4'>
            <button className='border rounded bg-gray-300 text-black border-gray-300 py-2 px-5 '>Play</button>
            <button className='border rounded text-white border-gray-300 py-2 px-5 ml-5'>Watch Later</button>
          </div>
          <p className='text-sm text-gray-300'>Release Date: {movieRamdom?.release_date}</p>
          <p className='w-full text-xl py-3 truncate md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-300'>Overview: {movieRamdom?.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default Carousel
