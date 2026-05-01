import React from 'react'
import { Outlet } from 'react-router'
import {HeadNav}from '../HeadNav'
import { SearchBar } from './SearchBar'

export const MainLayout = () => {
  return (
    <>
        <HeadNav/>
        <SearchBar/>
        <Outlet/>
    </>

  )
}
