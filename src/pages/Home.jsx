import React from 'react'
import { useSelector } from 'react-redux'
import { Banner } from '../Components/Layout/Banner';

export const Home = () => {
let data = useSelector((state)=> console.log(state));

  return (
    <>
    <Banner/>
    </>
  )
}
