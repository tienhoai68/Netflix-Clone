import React from 'react'
import { useRoutes } from 'react-router-dom';
import Homelayout from '../layouts/HomeLayout/Homelayout';
import Home from '../pages/Home/Home';

const Router = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Homelayout />,
      children: [
        {
          path: "/",
          element: <Home />
        }
      ]
    }
  ])


  return routing;
}

export default Router
