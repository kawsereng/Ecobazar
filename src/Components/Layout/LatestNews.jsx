import React from 'react'
import latestone from '../../assets/latestone.webp';
import latesttwo from '../../assets/latesttwo.webp';
import latestthree from '../../assets/latestthree.webp';
import { FaTag } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BiMessageAlt } from "react-icons/bi";
import { Link } from 'react-router';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Container } from './Container';


export const LatestNews = () => {
  return (
    <>
        <Container>
        <div className='mt-15 mx-auto mb-[60px]'>
            <h2 className='text-center font-pop text-2xl sm:text-[32px] text-[#1A1A1A] mb-8'>Latest News</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               <div className='w-full max-w-[442px] group mx-auto'>
                <img src={latestone} alt="latestone" className='w-full h-79 object-cover rounded-xl' />
                <div className='flex flex-wrap gap-x-3 gap-y-2 mt-6 font-pop text-[#666666]'>
                    <p className='flex items-center gap-2 ml-2'><FaTag className='text-[20px]' />Food</p>
                    <p className='flex items-center gap-2 '> <span><FaRegUser className='text-[20px]' /></span> By Admin</p>
                    <p className='flex items-center gap-2 '> <span> <BiMessageAlt className='text-[20px]'/></span> 65 Comments</p>
                </div>
                <p className='group-hover:text-[#2C742F] ml-2 text-[18px] font-pop text-[#1A1A1A] pr-0 sm:pr-19.5'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                <Link className='flex items-center text-[16px] font-pop ml-2 mt-6 text-[#00B207]'>Read More <IoIosArrowRoundForward className='text-[24px]' /> </Link>
               </div>

               <div className='w-full max-w-[442px] group mx-auto'>
                <img src={latesttwo} alt="latestone" className='w-full h-79 object-cover rounded-xl' />
                <div className='flex flex-wrap gap-x-3 gap-y-2 mt-6 font-pop text-[#666666]'>
                    <p className='flex items-center gap-2 ml-2'><FaTag className='text-[20px]' />Food</p>
                    <p className='flex items-center gap-2 '> <span><FaRegUser className='text-[20px]' /></span> By Admin</p>
                    <p className='flex items-center gap-2 '> <span> <BiMessageAlt className='text-[20px]'/></span> 65 Comments</p>
                </div>
                <p className='group-hover:text-[#2C742F] ml-2 text-[18px] font-pop text-[#1A1A1A] pr-0 sm:pr-19.5'>Eget lobortis lorem lacinia. Vivamus pharetra semper,</p>
                <Link className='flex items-center text-[16px] font-pop ml-2 mt-6 text-[#00B207]'>Read More <IoIosArrowRoundForward className='text-[24px]' /> </Link>
               </div>

               <div className='w-full max-w-[442px] group mx-auto'>
                <img src={latestthree} alt="latestone" className='w-full h-79 object-cover rounded-xl' />
                <div className='flex flex-wrap gap-x-3 gap-y-2 mt-6 font-pop text-[#666666]'>
                    <p className='flex items-center gap-2 ml-2'><FaTag className='text-[20px]' />Food</p>
                    <p className='flex items-center gap-2 '> <span><FaRegUser className='text-[20px]' /></span> By Admin</p>
                    <p className='flex items-center gap-2 '> <span> <BiMessageAlt className='text-[20px]'/></span> 65 Comments</p>
                </div>
                <p className='group-hover:text-[#2C742F] ml-2 text-[18px] font-pop text-[#1A1A1A] pr-0 sm:pr-19.5'>Maecenas blandit risus elementum mauris malesuada.</p>
                <Link className='flex items-center text-[16px] font-pop ml-2 mt-6 text-[#00B207]'>Read More <IoIosArrowRoundForward className='text-[24px]' /> </Link>
               </div>
              
            </div>
        </div>
    </Container>
      
    </>
  )
}
