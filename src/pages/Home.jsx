import React from 'react'
import { useSelector } from 'react-redux'
import { Banner } from '../Components/Layout/Banner';
import { PopularCategories } from '../Components/Layout/PopularCategories';
import { PopularProducts } from '../Components/Layout/PopularProducts';
import { SaleBanner } from '../Components/Layout/SaleBanner';
import { LatestNews } from '../Components/Layout/LatestNews';
import { ClientTestimonials } from '../Components/Layout/ClientTestimonials';
import { HotDeals } from '../Components/Layout/HotDeals';
import CompanyName from '../Components/Layout/CompanyName';
import SummerSell from '../Components/Layout/SummerSell';
import FeaturedProducts from '../Components/Layout/FeaturProducts';

export const Home = () => {


  return (
    <>
    <Banner/>
    <PopularCategories/>
    <PopularProducts/>
    <SaleBanner/>
    <HotDeals/>
    <SummerSell/>
    <FeaturedProducts/>
    <LatestNews/>
    <ClientTestimonials/>
    <CompanyName/>
    </>
  )
}
