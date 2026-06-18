import React from 'react'
import { useSelector } from 'react-redux'
import { Banner } from '../Components/Layout/Banner';
import { PopularCategories } from '../Components/Layout/PopularCategories';
import { Products } from '../Components/Layout/Products';

export const Home = () => {


  return (
    <>
    <Banner/>
    <PopularCategories/>
    <Products/>
    </>
  )
}
