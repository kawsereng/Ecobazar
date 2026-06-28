import React from 'react'
import { Container } from './Container'
import BannerSide1 from '../../assets/Banner1.webp'
// import Line from '../../assets/Line.webp'
import Side1 from '../../assets/Side1.webp'
import Side2 from '../../assets/Side2.webp'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';;

// Fitured //
import { LiaShippingFastSolid } from "react-icons/lia";
import { VscPackage } from "react-icons/vsc";
import { IoBagCheckOutline } from "react-icons/io5";
import support from '../../assets/support.webp'

export const Banner = () => {
  return (
    <>
      <Container>
        <div className="flex w-full gap-5 mt-[20px]">
          <Swiper
            pagination={{
              clickable: true,
            }}
            scrollbar={{
              hide: true,
            }}
            autoplay={true}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: ".prev-arrow",
              nextEl: ".next-arrow",
            }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            <SwiperSlide>
              <img
                className="w-full h-auto rounded-xl"
                src={BannerSide1}
                alt="BannerSide1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-auto rounded-xl"
                src={BannerSide1}
                alt="BannerSide1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-auto rounded-xl"
                src={BannerSide1}
                alt="BannerSide1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-auto rounded-xl"
                src={BannerSide1}
                alt="BannerSide1"
              />
            </SwiperSlide>
            <div className="prev-arrow">
              <FaArrowLeft />
            </div>
            <div className="next-arrow">
              <FaArrowRight />
            </div>
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
              <SwiperSlide>
                <img src={Side1} alt="Side 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Side2} alt="Side 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Side1} alt="Side 1" />
              </SwiperSlide>
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
              <SwiperSlide>
                <img src={Side2} alt="Side 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Side1} alt="Side 2" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
      {/* Fitured */}

      <Container>
        <div className="mt-[24px] mb-[60px]">
          <div className="flex  p-10 shadow-md mx-auto">
            <div className="flex items-center gap-x-4 w-[306px] mx-auto">
              <LiaShippingFastSolid className="text-[40px] text-[#00B207]" />
              <div className="">
                <h2 className="text-[16px] text-[#1A1A1A] font-pop font-semibold">
                  Free Shipping
                </h2>
                <p className="font-pop text-sm text-[#999999]">
                  Free shipping on all your order
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-4 w-[306px] mx-auto">
              <img
                src={support}
                alt="support"
                className="text-[40px] text-[#00B207]"
              />
              <div>
                <h2 className="text-[16px] text-[#1A1A1A] font-pop font-semibold">
                  Customer Support 24/7
                </h2>
                <p className="font-pop text-sm text-[#999999]">
                  Instant access to Support
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-4 w-[306px] mx-auto">
              <IoBagCheckOutline className="text-[40px] text-[#00B207]" />
              <div>
                <h2 className="text-[16px] text-[#1A1A1A] font-pop font-semibold">
                  100% Secure Payment
                </h2>
                <p className="font-pop text-sm text-[#999999]">
                  We ensure your money is save
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-x-4 w-[306px] mx-auto">
              <VscPackage className="text-[40px] text-[#00B207]" />
              <div>
                <h2 className="text-[16px] text-[#1A1A1A] font-pop font-semibold">
                  Money-Back Guarantee
                </h2>
                <p className="font-pop text-sm text-[#999999]">
                  30 Days Money-Back Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
