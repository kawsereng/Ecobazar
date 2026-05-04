import React from 'react'
import { Outlet } from 'react-router'
import {HeadNav}from '../HeadNav'
import { SearchBar } from './SearchBar'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Banner } from './Banner'

export const MainLayout = () => {
  return (
    <>
        <HeadNav/>
        <SearchBar/>
        <Navbar/>
        <Banner/>
        <Footer/>
        <Outlet/>
    </>

  )
}
