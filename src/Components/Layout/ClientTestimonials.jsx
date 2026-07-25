import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Testimonial from '../../assets/Testimonial1.webp';
import Testimonial2 from '../../assets/Testimonial2.webp';
import Testimonial3 from '../../assets/Testimonial3.webp';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Container } from './Container';
export const ClientTestimonials = () => {
  return (
    <>
            <div className='bg-[#F2F2F2] mt-15 '>
            <Container>
                <div className='relative bg-[#F2F2F2] '>
            <div className='pt-15 font-pop font-semibold text-2xl text-[32px] text-[#1A1A1A] relative'>Client Testimonials</div>
            <div className='prev-arrowone'><FaArrowLeft /></div>
            <div className='next-arrowone'><FaArrowRight /></div>
            <div className='mt-9'>
                <Swiper
                spaceBetween={16}
                breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 3, spaceBetween: 16 },
                }}
                className='w-full'
                navigation={{
                    prevEl: '.next-arrowone',
                    nextEl: '.prev-arrowone',
                }}
                modules={[Navigation]}
                >
                <SwiperSlide><img src={Testimonial} alt="BannerBig" className='w-full h-auto' /></SwiperSlide>
                <SwiperSlide><img src={Testimonial2} alt="BannerBig" className='w-full h-auto' /></SwiperSlide>
                <SwiperSlide><img src={Testimonial3} alt="BannerBig" className='w-full h-auto' /></SwiperSlide>
                <SwiperSlide><img src={Testimonial} alt="BannerBig" className='w-full h-auto' /></SwiperSlide>
                <SwiperSlide><img src={Testimonial} alt="BannerBig" className='w-full h-auto' /></SwiperSlide>
                <SwiperSlide><img src={Testimonial2} alt="BannerBig" className='w-full h-auto' /></SwiperSlide>
                <SwiperSlide><img src={Testimonial3} alt="BannerBig" className='w-full h-auto' /></SwiperSlide>
                <SwiperSlide><img src={Testimonial} alt="BannerBig" className='w-full h-auto' /></SwiperSlide>
                
                </Swiper>
            </div>
        </div>
        
            </Container>
        </div>
    </>
  )
}
