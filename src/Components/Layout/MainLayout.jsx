import React from 'react'
import { Outlet, useLocation } from 'react-router'
import {HeadNav}from '../HeadNav'
import { SearchBar } from './SearchBar'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Banner } from './Banner'
import { FooterTop } from './FooterTop'
import { Breadcrumbs } from './Breadcrumbs'

export const MainLayout = () => {
  let PageName = useLocation().pathname

  return (
    <>
        <HeadNav/>
        <SearchBar/>
        <Navbar/>
       {PageName !=='/'&& <Breadcrumbs/>}
        <Banner/>
        <Outlet/>
        <FooterTop/>
        <Footer/>
    </>

  )
}
