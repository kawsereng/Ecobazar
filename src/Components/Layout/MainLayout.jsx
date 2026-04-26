import React from 'react'
import { Outlet } from 'react-router'
import { HeadNav } from '../HeadNav'

export const MainLayout = () => {
  return (
    <>
        <HeadNav/>
        <Outlet/>
    </>

  )
}
