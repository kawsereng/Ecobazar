import React from 'react'
import { useSelector } from 'react-redux'
import { Banner } from '../Components/Layout/Banner';
import { PopularCategories } from '../Components/Layout/PopularCategories';
import { Products } from '../Components/Layout/Products';
import { SaleBanner } from '../Components/Layout/SaleBanner';
import { LatestNews } from '../Components/Layout/LatestNews';

export const Home = () => {


  return (
    <>
    <Banner/>
    <PopularCategories/>
    <Products/>
    <SaleBanner/>
    <LatestNews/>
    </>
  )
}
