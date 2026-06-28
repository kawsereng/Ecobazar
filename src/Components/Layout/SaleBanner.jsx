import React from 'react'
import { Container } from './Container'
import SaleBanner1 from '../../assets/SaleBanner1.webp'
import SaleBanner2 from '../../assets/SaleBanner2.webp'
import SaleBanner3 from '../../assets/SaleBanner3.webp'
import Timer from '../Timer/Timer'

export const SaleBanner = () => {
  return (
    <>
    
    <Container>
        <div className='flex gap-[24px] mt-[60px] mb-[60px]'>
            <div  className='relative'>
              <div className=''><img src={SaleBanner1} alt="SaleBanner1" /> </div>
             <div className='absolute top-0 left-[135px] mt-[123px] font-pop font-normal text-[24px] text-[#ffffff]'><Timer/>
                <div className='flex text-[12px] gap-[14px] '>
                  <h6 >Days</h6>
                  <h6>Hours</h6>
                  <h6>Mins</h6>
                  <h6>Secs</h6>
                </div>
             </div>
            </div>
            <div><img src={SaleBanner2} alt="SaleBanner2" /></div>
            <div><img src={SaleBanner3} alt="SaleBanner3" /></div>
            
        </div>
    </Container>
    </>
  )
}
