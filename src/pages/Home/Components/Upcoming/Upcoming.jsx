import React, { useEffect, useState } from 'react'
import { movieService } from '../../../../services/Movie';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import { FaHeart, FaRegHeart } from "react-icons/fa"

import "./Upcoming.scss"

const Upcoming = () => {

  const [movies, setMovie] = useState([]);

  const [like, setLike] = useState(false)

  const fetchUpcomingMovie = async () => {
    try {
      const result = await movieService.fetchUpcomingMovieApi();
      setMovie(result.data.results)
    } catch (error) {

    }
  }
  useEffect(() => {
    fetchUpcomingMovie();
  }, [])

  const renderContent = () => {
    return movies.map((element, index) => {
      return (
        <SwiperSlide key={index}>
          <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2'>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${element?.backdrop_path}`} alt={element.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
              <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{element?.title}</p>
              <p>{like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}</p>
            </div>
          </div>
        </SwiperSlide>
      )
    })
  }

  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>Upcoming</h2>
      <div className='relative flex items-center'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={7}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="movieSwiper"
        >
          {renderContent()}
        </Swiper>
      </div>
    </div>
  )
}

export default Upcoming
