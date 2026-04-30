import React from 'react'
import { Outlet } from 'react-router'
import {HeadNav}from '../HeadNav'
import { SearchBar } from './SearchBar'
import Sidebar from './Sidebar'

export const MainLayout = () => {
  return (
    <>
        <HeadNav/>
        <SearchBar/>
        <Sidebar/>
        <Outlet/>
    </>

  )
}
