import React from 'react'
import { Container } from './Container'
import BannerSide1 from '../../assets/Banner1.webp'
import Line from '../../assets/Line.webp'
import Side1 from '../../assets/Side1.webp'
import Side2 from '../../assets/Side2.webp'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';;

export const Banner = () => {
  return (
    <>
   
      <Container>
        
        <div className='flex w-full gap-5 mt-[20px]'>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-[872px] "
      >
            <SwiperSlide><img src={BannerSide1} alt="Banner" /></SwiperSlide>
            <SwiperSlide><img src={BannerSide1} alt="Banner" /></SwiperSlide>
            <SwiperSlide><img src={BannerSide1} alt="Banner" /></SwiperSlide>
            <SwiperSlide><img src={BannerSide1} alt="Banner" /></SwiperSlide>
            <SwiperSlide><img src={BannerSide1} alt="Banner" /></SwiperSlide>
          </Swiper>
            <div>

          
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-[423px]"
      >
            <SwiperSlide><img src={Side1} alt="Side 1" /></SwiperSlide>
            <SwiperSlide><img src={Side2} alt="Side 2" /></SwiperSlide>
            <SwiperSlide><img src={Side1} alt="Side 1" /></SwiperSlide>
          </Swiper>


        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-[423px] mt-[20px]"
      >
            <SwiperSlide><img src={Side2} alt="Side 1" /></SwiperSlide>
            <SwiperSlide><img src={Side1} alt="Side 2" /></SwiperSlide>
          </Swiper> 
           </div>
      </div>


      
      </Container>
        {/* Fitured */}
          <div className='ml-[500px]'>
            <img src={Line} alt="Line" />
          </div>
    </>
  )
}
