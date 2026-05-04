import React from 'react'
import { Outlet } from 'react-router'
import {HeadNav}from '../HeadNav'
import { SearchBar } from './SearchBar'
import { Navbar } from './Navbar'

export const MainLayout = () => {
  return (
    <>
        <HeadNav/>
        <SearchBar/>
        <Navbar/>
        <Outlet/>
    </>

  )
}
