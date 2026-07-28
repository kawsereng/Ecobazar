import React from 'react';
import { Link } from 'react-router';
import { Container } from '../Components/Layout/Container';
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { TbPhoneCall } from "react-icons/tb";


const Contact = () => {
  


  return (
   
      <Container>
        <div className="flex gap-x-6 py-20">
          <div className='w-78 bg-white rounded-lg shadow-[0_4px_10px_rgba(0,38,3,0.08)] border border-[#f2f2f2] px-6 py-5'>
            <div className='text-center border-b border-b-brdr'>
               <span > <IoLocationOutline  className='text-[#00B207] text-[40px] ml-[100px] mb-[20px]'/></span>
              <p className='font-pop font-normal text-base text-subb leading-[170%] pt-4 pb-6'>05 Mirpur Road, Dhanmondi, Dhaka, Bangladesh - 1207</p>
            </div>

            <div className='text-center border-b border-b-brdr pt-6'>

             

              <div className="flex flex-col pt-4 pb-6"> 
                <span className='text-[#00B207] text-[40px] ml-[100px] mb-[20px]'> <TfiEmail /></span>
                <Link to='mailto:Demo@gmail.com' className='font-pop font-normal text-base text-subb leading-[170%]'>Demo@gmail.com</Link>
                <Link to='mailto:Demo.dev.bd@gmail.com' className='font-pop font-normal text-base text-subb leading-[170%]'>Demo.dev.bd@gmail.com</Link>
              </div>
            </div>

            <div className='text-center pt-6'>

              <span> <TbPhoneCall  className='text-[#00B207] text-[40px] ml-[100px] mb-[10px]'/></span>

              <div className="flex flex-col pt-4 pb-6">
                <Link to='tel:+880170025155' className='font-pop font-normal text-base text-subb leading-[170%]'>0172485555</Link>
                <Link to='mailto:demo@gmail.com' className='font-pop font-normal text-base text-subb leading-[170%]'>Demo.dev.bd@gmail.com</Link>
              </div>
            </div>
          </div>

          <div className='w-246 bg-white rounded-lg shadow-[0_4px_10px_rgba(0,38,3,0.08)] border border-[#f2f2f2] p-12.5'>
           
              <div className="w-121.5">
                <h1 className='font-pop font-semibold text-2xl text-[1A1A1A] leading-[150%] pb-2'>
                  Just Say Hello!
                </h1>
                <p className='defaultfs text-[#808080]'>
                 Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.
                </p>
              </div>
              <div className="flex gap-x-4 w-full pb-4 pt-6">
                <input
                  type="text"
                  name="name"
                  placeholder='Name'
                  className='w-full border border-brdr rounded-md font-pop font-normal text-base text-[#666666] placeholder:text-gry leading-[130%] py-3.5 ps-4 outline-none focus:border-primary'
                />
                <input
                  type="email"
                  name="email"
                  placeholder='Email'
                  className='w-full border border-brdr rounded-md font-pop font-normal text-base text-[#666666] placeholder:text-gry leading-[130%] py-3.5 ps-4 outline-none focus:border-primary'
                />
              </div>
              <input
                type="text"
                name="hello"
                placeholder='Hello'
                className='w-full border border-brdr rounded-md font-pop font-normal text-base text-[#666666] placeholder:text-gry leading-[130%] py-3.5 ps-4 outline-none focus:border-primary'
              />
              <div className="pt-4 pb-6">
                <input
                  type="text"
                  name="subject"
                  placeholder='Subject'
                  className='w-full border border-brdr rounded-md font-pop font-normal text-base text-[#666666] placeholder:text-gry leading-[130%] pt-3.5 pb-15.75 ps-4 outline-none focus:border-primary'
                />
              </div>
              <button className="bg-primary bg-[#00B207] text-white text-[16px] font-semibold font-pop leading-[120%] px-10 py-4 rounded-[46px] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed">
                Send Message
              </button>
         
          </div>
        </div>
      </Container>
    
  )
}

export default Contact;