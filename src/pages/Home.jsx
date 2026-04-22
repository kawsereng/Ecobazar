import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {
let data = useSelector((state)=> console.log(state));

  return (
    <div>Home</div>
  )
}
