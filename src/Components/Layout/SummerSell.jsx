import React from 'react'
import { Container } from './Container'
import SumerSell from '../../assets/SumerSell.webp'
    const SummerSell = () => {
  return (
    <>
      <Container>
        <div className="p-5 sm:w-full sm:p-0  mt-17.5 mb-17.5 ">
          <img src={SumerSell} alt="SumerSell" />
        </div>
      </Container>
    </>
  );
}

export default SummerSell
