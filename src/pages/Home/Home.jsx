import React from 'react'
import Carousel from './Components/Carousel/Carousel';
import Upcoming from './Components/Upcoming/Upcoming';
import Popular from './Components/Popular/Popular';
import Trending from './Components/Trending/Trending';
import TopRated from './Components/TopRated/TopRated';
import Horror from './Components/Horror/Horror';

const Home = () => {
  return (
    <>
      <Carousel />
      <Upcoming />
      <Popular />
      <Trending />
      <TopRated />
      <Horror />
    </>
  )
}

export default Home
